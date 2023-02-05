import mongoose from 'mongoose';
import azure from 'azure-storage';

var blobService = azure.createBlobService(
  'DefaultEndpointsProtocol=https;AccountName=fancurve;AccountKey=SXrS0iRbQifMjJChQ20jXmgAyoRe2EWa/ecYs/+MhwgnDItaezBMtfv4wCKQPzx27BxvY3rPUTUVR7JrU9i0Cg==;EndpointSuffix=core.windows.net'
);

// const opts = {
//     timestamps: {
//       createdAt: 'created_at',
//       updatedAt: 'updated_at'
//     }
//   };

const userSchema = new mongoose.Schema(
  {
    nonce: {
      type: Number,
      allowNull: false,
      default: () => Math.floor(Math.random() * 1000000),
    },
    publicAddress: {
      type: String,
      //allowNull: false,
      //unique: true,
      lowercase: true,
      //immutable: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
    },
    emailVerification: {
      type: Boolean,
      default: false,
    },
    userName: {
      type: String,
    },
    description: {
      type: String,
    },
    twitter: String,
    facebook: String,
    tiktok: String,
    discord: String,
    instagram: String,
    profileImage: {
      type: String,
    },
  }, //opts
  {
    timestamps: true,
  }
);

userSchema.methods.profileImageSignature = function () {
  const imagePath = this.profileImage.split('/');
  const containerName = imagePath[0];
  const blobName = `${imagePath[1]}/${imagePath[2]}`;
  var startDate = new Date();
  var expiryDate = new Date(startDate);
  expiryDate.setMinutes(startDate.getMinutes() + 100);
  startDate.setMinutes(startDate.getMinutes() - 100);

  var sharedAccessPolicy = {
    AccessPolicy: {
      Permissions: azure.BlobUtilities.SharedAccessPermissions.READ,
      Start: startDate,
      Expiry: expiryDate,
    },
  };
  var token = blobService.generateSharedAccessSignature(
    containerName,
    blobName,
    sharedAccessPolicy
  );
  // var sasUrl = blobService.getUrl(containerName, blobName, token);
  let url =
    'https://fancurve.azureedge.net/' +
    containerName +
    '/' +
    blobName +
    '?' +
    token;
  return url;
};

export const User = mongoose.model('User', userSchema);
