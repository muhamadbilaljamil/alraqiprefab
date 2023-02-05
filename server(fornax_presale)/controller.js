import * as ethers from 'ethers';
import mongoose, { mongo } from 'mongoose';
import { getUploadURL } from '../handlers/azureBlobService';
import { userBadgesSchema, addLookup } from '../schema/userBadgesCollection';
import { User } from '../models/user';
import { EmailOTP } from '../models/emailOTP';
import { sendGridMail } from '../util/sendgrid';
import { signToken } from '../middleware/check-auth';
import { generateUserEvent } from '../handlers/handleEventAndChallenge';
import { UserBadgesCollection } from '../models/badges/userBadgesCollection';
import { UserReferenceCode } from '../models/badges/userReferenceCode';
import { respond } from '../util/respond';
import { schema, getAttribute } from '../schema/usertoken';
import { getDownloadURL } from '../handlers/azureBlobService';
import { UserToken } from '../models/userToken';
import { fetchUserTokensByUserId } from '../services/user-service';

// Get 6 digit number as nonce auto-generated  by model
export const getNonce = async (req, res) => {
  const { publicAddress } = req.body;
  if (!publicAddress) {
    return respond.badRequestWithMessage(
      res,
      'Request should have signature and publicAddrss'
    );
  } else {
    const user = new User({
      publicAddress: publicAddress,
    });
    let userData = await User.findOne({ publicAddress: publicAddress });
    try {
      if (userData) {
        return respond.data(res, {
          message: `I am signing my one-time nonce: ${userData.nonce}`,
        });
      } else {
        user
          .save()
          .then((data) => {
            return respond.data(res, {
              message: `I am signing my one-time nonce: ${data.nonce}`,
            });
          })
          .catch((error) => {
            return respond.error(res, {
              message: 'System found error',
              error: error,
            });
          });
      }
    } catch (error) {
      return respond.error(res, error);
    }
  }
};
// meta-mask wallet connection signature authentication and return token as response
export const signatureAuthentication = async (req, res) => {
  const { publicAddress, signature } = req.body;
  if (!publicAddress || !signature) {
    return respond.badRequest(
      res,
      'Request should have signature and publicAddrss'
    );
  } else {
    let user = await User.findOne({ publicAddress: publicAddress });

    if (!user) {
      return respond.data(res, {
        message: `User with publicAddress ${publicAddress} is not found in database`,
      });
    } else {
      try {
        const message = `I am signing my one-time nonce: ${user.nonce}`;
        const signerAddress = ethers.utils.verifyMessage(message, signature);
        if (signerAddress.toLowerCase() === user.publicAddress.toLowerCase()) {
          user.nonce = Math.floor(Math.random() * 1000000);
          await user.save();
          const token = signToken({
            userId: user._id,
            publicAddress: user.publicAddress,
          });
          return respond.data(res, {
            message: 'Login successfully',
            verification: 'Signature is valid!',
            token: token,
          });
        } else {
          return respond.unauthorized(res, {
            error: 'Invalid signature!',
          });
        }
      } catch (error) {
        return respond.error(res, error);
      }
    }
  }
};
// Get logedIn User Details
export const getProfile = async (req, res) => {
  const decodedToken = req.user;
  try {
    const data = await User.findOne({
      _id: decodedToken.userId,
    });
    if (data) {
      const profile = getProfileData(data);
      return respond.data(res, profile);
    } else respond.badRequest(res, 'Invalid user!');
  } catch (error) {
    return respond.error(res, error);
  }
};
// Get User Details by ID
export const getProfileById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await User.findById(id);
    if (data) {
      const profile = getProfileData(data);
      return respond.data(res, profile);
    } else respond.badRequest(res, 'Invalid user!');
  } catch (error) {
    return respond.error(res, error);
  }
}
// check username-availability
export const usernameAvailability = async (req, res) => {
  try {
    const { userName } = req.body;
    const decodedToken = req.user;
    const userData = await User.findOne({
      $and: [{ userName: { $eq: userName } }, { _id: { $ne: decodedToken.userId } }],
    });
    if (userData) {
      return respond.conflict(
        res,
        'username not available please try another'
      );
    } else {
      return respond.data(
        res,
        'username is available'
      );
    }
  } catch (error) {
    return respond.error(res, error);
  }

}

// Update User
export const updateProfile = async (req, res) => {
  try {
    const { email, userName } = req.body;
    console.log("User request body: ", req.body);
    let isUserName = null;
    const decodedToken = req.user;
    if (userName) {
      isUserName = await User.findOne({
        $and: [{ userName: { $eq: userName } }, { _id: { $ne: decodedToken.userId } }],
      });
    }
    const isEmail = await User.findOne({
      $and: [{ email: { $eq: email } }, { _id: { $ne: decodedToken.userId } }],
    });
    if (!isEmail && !isUserName) {
      const response = await User.findOne({
        $and: [
          { email: { $eq: email } },
          { _id: { $eq: decodedToken.userId } },
        ],
      });
      //if user update the email so emailVerification set false
      console.log("main change: ", response);
      if (!response) {
        const user = await User.findOneAndUpdate(
          { _id: decodedToken.userId },
          {
            $set: {
              ...req.body,
              emailVerification: false,
            },
          },
          { new: true }
        );
        const profile = getProfileData(user);
        return respond.data(res, {
          message: 'Profile updated!',
          updatedData: profile,
        });
      }
      // if user update other profile properties instead email
      else {
        const user = await User.findOneAndUpdate(
          { _id: decodedToken.userId },
          {
            $set: {
              ...req.body
            },
          },
          { new: true }
        );
        const profile = getProfileData(user);
        console.log('User request body: ', req.body);
        return respond.data(res, {
          message: 'Profile updated!',
          updatedData: profile,
        });
      }

    } else {
      console.log("User name: ", isUserName)
      console.log("Email: ", isEmail)

      if (isUserName && isEmail) {
        return respond.conflict(
          res,
          'Email and username not available please try another'
        );
      } else if (isEmail) {
        return respond.conflict(
          res,
          'Email not available please try another'
        );
      } else {
        return respond.conflict(
          res,
          'username not available please try another'
        );

      }

    }
  } catch (error) {
    return respond.error(res, error);
  }
};
// Get signed-URL to upload Profile-Image at azure storage
export const getSignedURL = async (req, res) => {
  const decodedToken = req.user;
  const data = {
    id: decodedToken.userId,
    container: 'user-profile',
    extension: req.body.extension,
  };
  const response = getUploadURL(data);
  const resdata = { imagePath: response.fileName, signedURL: response.URL };
  if (!response) {
    return res.status(400).json({ error });
  } else {
    return res.status(200).json(resdata);
  }
};

//Update user-profile image path in fancurve DB
export const updateImagePath = async (req, res) => {
  try {
    const decodedToken = req.user;
    //Updating Image URL in User Data
    await User.findByIdAndUpdate(
      decodedToken.userId,
      { profileImage: req.body.profileImage },
      { new: true },
      (error, updatedUser) => {
        if (error) {
          return res.status(400).json({ error });
        } else {
          return res.status(200).json("Image path updated successfully");
        }
      }
    );
  } catch (error) {
    return respond.error(res, error);
  }

}
// Login User by email /Register User by email if not found
export const registerEmail = async (req, res) => {
  const { email, reference } = req.body;

  if (!email) {
    return respond.badRequestWithMessage(res, 'Request should have Email');
  } else {
    //find user by email
    let userData = await User.findOne({ email: email });
    if (!userData) {
      //register user by email
      const user = new User({
        email: email,
      });
      //save user to DB
      let response = await user.save();
      if (!response) {
        return respond.error(res, 'Failed to create user');
      } else {
        //generate OTP for email
        const otpResponse = getOTP(email);
        if (!otpResponse) {
          return respond.error(res, 'Failed to generate OTP');
        } else {
          return respond.data(res, {
            message: `OTP sent at ${email}`,
          });
        }
      }
    } else {
      //generate OTP for email
      const otpResponse = await getOTP(email);
      if (!otpResponse) {
        return respond.error(res, 'Failed to generate OTP');
      } else {
        return respond.data(res, {
          message: `OTP sent at ${email}`,
        });
      }
    }
  }
};
// Login using OTP
export const authenticateEmail = async (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) {
    return respond.badRequestWithMessage(
      res,
      'Request should have email and OTP'
    );
  } else {
    try {
      // find data form EmailOTP
      let Data = await EmailOTP.findOne({
        $and: [{ email: { $eq: email } }, { otp: { $eq: otp } }],
      });
      if (!Data) {
        return respond.unauthorized(res, 'OTP not valid!');
      } else {
        const response = await User.findOneAndUpdate(
          { email: email },
          { $set: { emailVerification: true } },
          { new: true }
        );
        //if updated successfully
        if (response) {
          // generate OTP
          Data.otp = Math.floor(100000 + Math.random() * 100000);
          Data.save();
          //generate token
          const token = await signToken({
            userId: response._id,
            eamil: response.email,
          });
          generateUserEvent({
            eventName: 'Created profile',
            userId: response._id,
          });
          return respond.data(res, {
            message: 'Login successfully',
            verification: 'Email verified!',
            token: token,
          });
        }
      }
    } catch (error) {
      return respond.error(res, error);
    }
  }
};
// verify email and generate otp
const getOTP = async (email) => {
  try {
    //find email in DB
    let otpData = await EmailOTP.findOne({ email: email });
    if (!otpData) {
      // Create new record for email&OTP
      const emailOTP = new EmailOTP({
        email: email,
      });
      await emailOTP.save().then((data) => {
        sendGridMail(email, data.otp);
        return data.otp;
      });
    } else {
      // update OTP and save to DB
      otpData.otp = Math.floor(100000 + Math.random() * 100000);
      await otpData.save();
      sendGridMail(email, otpData.otp);
      return otpData.otp;
    }
  } catch (error) {
    console.error('Error', error);
  }
};

// Get Image blog url
//TODO change it post method in Model
const getProfileData = (data) => {
  try {
    const jsonObject = data.toObject();
    const isProfileImage = jsonObject.hasOwnProperty('profileImage');
    if (isProfileImage) {
      const profileImageSignature = data.profileImageSignature();
      return {
        userData: data,
        profileImageURL: profileImageSignature,
      };
    } else
      return {
        userData: data,
        profileImageURL: null,
      };
  } catch (err) {
    console.log('Catch error: ', err);
  }
};

//generate user reference code to invite friends by reference
export const getUserReferenceCode = async (req, res) => {
  let { userId } = req.user;
  //check reference code is exist already
  const isReferenceCodeExist = await UserReferenceCode.findOne({
    userId: userId,
  });
  //if referenc code exsit already then return this
  if (isReferenceCodeExist) {
    return respond.data(res, { referenceCode: isReferenceCodeExist._id });
  }
  //if referenc code not exist. first generate it and then return this
  else {
    const userReferenceCode = new UserReferenceCode({
      userId: userId,
    });
    const response = await userReferenceCode.save();
    if (response) {
      return respond.data(res, { referenceCode: response._id });
    }
  }
};

export const inviteFriend = async (req, res) => {
  let { userId } = req.user;
  generateUserEvent({
    eventName: 'Invited friends',
    userId,
  });
  return respond.data(res, { message: 'Invited successfully' });
};

// List LoggedIn User Badges
export const userBadgesCollection = async (req, res) => {
  try {
    let id = mongoose.Types.ObjectId(req.user.userId);
    const badgesCollection = await UserBadgesCollection.aggregate([
      { $match: { userId: id } },
      ...addLookup(userBadgesSchema.mask.lookups),
    ]);

    const userBadges = badgesCollection.map((badge) => {
      return {
        challenge: badge.challengeDetail[0].name,
        pointsToAchive: badge.pointsToAchive,
        badgeId: badge.badgeId,
        name: badge.badgeDetail[0].name,
        credit: badge.badgeDetail[0].credit,
      };
    });
    if (userBadges) {
      return respond.data(res, { userBadges });
    }
  } catch (error) {
    return respond.error(res, error);
  }
};

//for unit testing get otp automatically
export const getOTPSecret = async (req, res) => {
  const email = req.body.email;
  const OTP = await getOTP(email);
  return respond.data(res, { OTP });
};

export const getUserTokens = async (req, res) => {
  try {
    const id = mongoose.Types.ObjectId(req.user.userId);
    // const userTokens = await UserToken.aggregate([
    //   { $match: { userId: id } },
    //   ...schema.mask.lookups,
    //   {
    //     $project: {
    //       ...getAttribute(schema.mask.attributes),
    //       ...schema.mask.getterMethods,
    //     },
    //   },
    // ]);
    // let tokensData = [];
    // userTokens.map((item) => {
    //   let imageURL = [];
    //   let images = item.token[0].image;
    //   if (images.length > 0) {
    //     images.map((image) => {
    //       if (image) {
    //         imageURL.push(getDownloadURL(image));
    //       }
    //     });
    //   }
    //   const tokenData = tokenObj(imageURL, item);
    //   tokensData.push(tokenData);
    // });
    // return respond.data(res, tokensData);

    const userTokens = await fetchUserTokensByUserId(id)
    return respond.data(res, userTokens);
  } catch (error) {
    return respond.error(res, error);
  }
};

export const getUserTokensById = async (req, res) => {
  try {
    const id = mongoose.Types.ObjectId(req.params.id);
    // const userTokens = await UserToken.aggregate([
    //   { $match: { userId: id } },
    //   ...schema.mask.lookups,
    //   {
    //     $project: {
    //       ...getAttribute(schema.mask.attributes),
    //       ...schema.mask.getterMethods,
    //     },
    //   },
    // ]);
    // let tokensData = [];
    // userTokens.map((item) => {
    //   let imageURL = [];
    //   let images = item.token[0].image;
    //   if (images.length > 0) {
    //     images.map((image) => {
    //       if (image) {
    //         imageURL.push(getDownloadURL(image));
    //       }
    //     });
    //   }
    //   const tokenData = tokenObj(imageURL, item);
    //   tokensData.push(tokenData);
    // });
    // return respond.data(res, tokensData);

    const userTokens = await fetchUserTokensByUserId(id)
    return respond.data(res, userTokens);
  } catch (error) {
    return respond.error(res, error);
  }
};

const tokenObj = (imageURL, item) => {
  try {
    return {
      _id: item.token[0]._id,
      name: item.token[0].name,
      description: item.token[0].description,
      attributes: item.token[0].attributes,
      likes: item.likes,
      dislikes: item.dislikes,
      comments: item.comments,
      collection: item.collection[0].name,
      tier: item.tier[0],
      club: item.club[0],
      player: item.player[0],
      countryOfOrigin: item.countryOfOrigin[0],
      currentCountry: item.currentCountry[0],
      imageURL: imageURL,
    };
  } catch (error) {
    console.log('Catch error: ', error);
  }
};
