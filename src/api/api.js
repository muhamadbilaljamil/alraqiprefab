var axios = require('axios');
var FormData = require('form-data');
const path = require('path');

const {sleep} = require('./utils/helper');


/*
* 1. Authenticatiing Monax
* 2. Creating Collection - Monax
* 3. Create collection - Fancurve
* 4. Creating Tier - Monax
* 5. Create Tier - Fancurve
* 6. Creating Token - Monax
* 7. Creating Token - Fancurve
* 8. Add Token Attributes - Monax
* 9. Add Token Attributes - Fancurve
* 10. Upload Tier Images - Monax
* 11. Upload Tier Images - Fancurve
* . Deploy Collection - Monax
* 8. mint Collection - Monax
* */


const fs = require('fs');
const {
  fcCreateCollection,
  uploadTermAndConditionFile,
  fcCreateTier,
  fcCreateToken,
  fcAddTokenAttributes,
  fcUploadTokenImage,
  fcUploadURL,
  updateFancurveTokenImage
} = require('./fancurve');
let collectionsLogs = {};

const {MODAX_API_URL, ENDPOINTS} = require('./config')
const configs = require('./config.json');

const stream = fs.createWriteStream(`./_logs/${new Date().toISOString()}.log`);

let COLLECTION = null;
let COLLECTION_ID = 191;
let FC_COLLECTION_ID = null;
let TIER_ID = 56;
let FC_TIER_ID = null;
let TOKEN_ID = 23;
const TOTAL_TOKENS_TO_MINT = 4000;

const addToLogs =  async (content) => {
  // LOGS = LOGS + '\n' + content
  const date = new Date().toISOString().
  replace(/T/, ' ').      // replace T with a space
    replace(/\..+/, '')     // delete the dot and everything after

  console.log(content);
  stream.write(date + ' - ' + content + '\n');
}

const endWriteStream = () => {
  stream.end();
};
const client = axios.create({
  baseURL: MODAX_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a response interceptor
client.interceptors.response.use(
  function (response) {
    //* returning response
    return response;
  },
  function (error) {
    //* handling response error
    if (error.response) {
      // Request made and server responded
      addToLogs('Error = ', error.response.data);
      console.log(error.response.data);
      console.log(error.response.status);
      // console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log('Request error = ', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Unknown Error', error.message);
    }

    return Promise.reject(error);
  }
);

//* main function/ entry Point
async function main() {
  //* 🔐 authenticate to use cedar APIs
  await authenticate();

  //create collection using cedar
  await createCollection();

  // Upload user terms and conditions file at cedar
  // const file = await uploadUserTermsAndConditions(
  //   './photos',
  //   '2.png'
  // );

  //Create tier
  await createTiers();
  // await createMultipleTokens()
  await writeCollectionLogs(true)
}
async function authenticate() {
  // Authenticate endpoint
  addToLogs(`authenticating`);
  const response = await client.post(ENDPOINTS.AUTHENTICATE, {
    Name: 'fancurve',
    Password: 'k#+tw_Mdu6LC2ad4KHz-q792DxuZ*ZNS',
  });
  const authToken = response.data;
  if(authToken)   addToLogs(`authenticated successfully`);
  // Set headers for the rest of the Requests
  client.defaults.headers.common['Authorization'] = authToken;
}

// /*
//  * creates a collection
//  * */
async function createCollection() {
  try {
    let collection = await createCedarCollection();

    //create fancurve collection including cedar collection
    let fancurveCollection = await createFancurveCollection(collection);

    //Depreciate the lines below and "collectionsLogs"
    collectionsLogs.collection = {...collection.data, ...fancurveCollection.data}
    await writeCollectionLogs();

  }catch (err) {
    addToLogs(`Error Catch (createCollection) =  ${err}`);
  }
}
async function createCedarCollection(){
  try {
    addToLogs(`Creating collection on Cedar`);
    let collection = await client.post(`${ENDPOINTS.CREATE_COLLECTION}`, configs.collection.details);
    if(!collection){
      addToLogs(`Error = creating cedar collection`);
    }
    COLLECTION_ID = collection.data.id;
    addToLogs(`Successfully created collection on Cedar = ${COLLECTION_ID}`);
    return collection;

  } catch (err) {
    addToLogs(`Error Catch (createCedarCollection) =  ${err}`);
    await sleep(10000);
    await createCedarCollection()
  }
}
async function createFancurveCollection(cedarCollection){
  try {
    addToLogs(`Creating collection ${COLLECTION_ID} on Fancurve`);
    let fancurveCollection = await fcCreateCollection(cedarCollection.data);
    if(!fancurveCollection){
      addToLogs(`Error = creating fancurve collection`);
    }
    FC_COLLECTION_ID = fancurveCollection._id
    addToLogs(`Successfully created collection ${COLLECTION_ID} on Fancurve = ${FC_COLLECTION_ID}`);
    return fancurveCollection;

  } catch (err) {
    addToLogs(`Error Catch (createFancurveCollection) =  ${err}`);
    await sleep(10000);
    await createFancurveCollection(cedarCollection);
  }
}


async function writeCollectionLogs(save=false){
  let json = JSON.stringify(collectionsLogs)
  let fs = require('fs');
  await fs.writeFileSync('collectionLogs.json', json);
  if(save){
    if(!fs.existsSync("collectionsLogs"))
    {
      await fs.mkdirSync("collectionsLogs");
    }
    await fs.writeFileSync(`collectionsLogs/collectionLogs-${COLLECTION_ID}.json`, json);
  }
}
async function readCollectionLogs(file="collectionLogs.json"){
  try {
    collectionsLogs = await fs.readFileSync('file');
  } catch (err) {
    console.error("CollectionLogs readFileSync Failed")
  }
}



/*
 * Create multiple cedar tiers
 */
async function createTiers() {
  try {
    const totalTiers = configs.collection.tiers.length;

    for (let t = 0; t < totalTiers; t++) {
      const tierDetails = configs.collection.tiers[t]
      const tierBody = configs.collection.tiers[t].details
      const tierAttributes = configs.collection.tiers[t].attributes
      const tier = await createTier(tierBody);
      console.log('tier = ', tier)


      const makTokens = tierBody.maxTokens;
      const tokenBody = tierDetails.tokens[0].details;
      const tokenDetails = tierDetails.tokens[0];

      for (let token = 0; token < makTokens; token++) {
        const tokenResp = await createToken(
          {
            collectionId: COLLECTION_ID,
            tierId: tier.cedarTierId,
            ...tokenBody,
            name: `${tokenBody.name}#${token+1}`,
          },
          tier.fcTierId
        )
        console.log('createToken tokenResp = ', tokenResp)
        await addTokenAttribute(tokenResp.cedarTokenId, tierAttributes);
      }

      const mediaFolderName = tokenDetails.folderName;
      console.log('mediaFolderName = ', mediaFolderName)
      const mediaFiles = tokenDetails.fileNames;
      console.log('mediaFiles = ', mediaFiles)
      for (let u = 1; u <= tokenBody.numberOfFiles; u++) {
        //upload token image file
        const fileName=  mediaFiles[u-1];
        await uploadTierContent(tier,
          `${__dirname}/${mediaFolderName}/${fileName}`,
          fileName,
          u-1
        );
      }

      console.log(`minted tier = ${t+1} / ${totalTiers}`)
      if(t === totalTiers-1) {
        await deployCollection()
      }




      // TIER_ID = response.data.id;
      //
      // const FcResponse = await createFancurveTier(cedarTier);
      //
      // if (!collectionsLogs.collection.tiers) {
      //   collectionsLogs.collection.tiers = [];
      // }
      // collectionsLogs.collection.tiers.push({...response.data, ...FcResponse.data});
      //
      // await writeCollectionLogs()
      //
      // console.log('FC tier: ', FcResponse.data);
    }
  }catch(err){
    addToLogs(`Error Catch (createTiers) =  ${err}`);
  }
}
/*
 * Create cedar tier
 */
async function createTier(tierDetails) {
  try {
    let response = await createCedarTier(tierDetails);
    TIER_ID = response.data.id;

    const FcResponse = await createFancurveTier(response);

    if (!collectionsLogs.collection.tiers) {
      collectionsLogs.collection.tiers = [];
    }
    collectionsLogs.collection.tiers.push({...response.data, ...FcResponse.data});

    await writeCollectionLogs()

    // console.log('FC tier: ', FcResponse.data);
    return {
      fcTierId: FcResponse.data._id,
      cedarTierId: response.data.id,
    };
  }catch(err){
    addToLogs(`Error Catch (createTier) =  ${err}`);
  }
}
async function createCedarTier(tierDetails){
  try {
    addToLogs(`Creating tier in Cedar`);
    let response = await client.post(ENDPOINTS.CREATE_TIER, {
      collectionId: COLLECTION_ID,
      ...tierDetails
    });

    if(!response) {
      addToLogs(`Error = creating cedar tier`);
    }
    else {
      addToLogs(`Successfully created tier in Cedar = ${response.data.id}`);
      return response
    }
  }catch (err) {
    addToLogs(`Error Catch (createCedarTier) =  ${err}`);
    await sleep(10000);
    return await createCedarTier(tierDetails);
  }
}
async function createFancurveTier(cedarTier){
  try {
    addToLogs(`Creating tier = ${cedarTier.data.id} in Fancurve`);
    const FcResponse = await fcCreateTier(cedarTier.data, FC_COLLECTION_ID);

    FC_TIER_ID = FcResponse.data._id
    if(!FcResponse) {
      addToLogs(`Error = creating cedar tier`);
    }
    addToLogs(`Successfully created tier ${cedarTier.data.id} in Fancurve = ${FC_TIER_ID}`);
    return FcResponse;
  }catch (err) {
    addToLogs(`Error Catch (createFancurveTier) =  ${err}`);
    await sleep(10000);
    return await createFancurveTier(cedarTier);
  }
}

// Create token at cedar DB, get response and create token at FC DB includeing cedar token data
async function createToken(data, fcTierId) {
  try {
    let response = await createCedarToken(data);
    const cedarToken = response.data;

    //creating token in Fancurve
    const FcResponse = await createFancurveToken(cedarToken, fcTierId);
    if(!collectionsLogs.collection.tokens) {
      collectionsLogs.collection.tokens = [];
    }
    collectionsLogs.collection.tokens.push({...response.data,...FcResponse.data.token})

    await writeCollectionLogs()
    return {cedarTokenId: cedarToken.id, fcTokenId: FcResponse.data.token._id};
  } catch (err) {
    addToLogs(`Error Catch (createToken) =  ${err}`);
    // sleep(10000);
    // createToken(data)
  }
}
async function createCedarToken(data){
  try {
    addToLogs(`Creating token in Cedar`);
    // creating token on cedar
    let response = await client.post(ENDPOINTS.CREATE_TOKEN, data);
    if(!response) {
      console.log('Failed to Create Token on Cedar => ');
      addToLogs(`Error = creating cedar tier`);
    }
    addToLogs(`successfully created cedar token = ${response.data.id}`);
    return response;
  }catch (err) {
    addToLogs(`Error Catch (createCedarToken) =  ${err}`);
    await sleep(10000);
    return await createCedarToken(data);
  }
}
async function createFancurveToken(cedarToken, fcTierId){
  try {
    addToLogs(`Creating token ${cedarToken.id} in Fancurve`);
    const FcResponse = await fcCreateToken(cedarToken, FC_COLLECTION_ID, fcTierId);
    if(!FcResponse) {
      addToLogs(`Error = creating fancurve token`)
    }
    addToLogs(`Successfully created token ${cedarToken.id} in Fancurve ${FcResponse.data.token._id}`);
    return FcResponse;
  }catch (err) {
    addToLogs(`Error Catch (createFancurveToken) =  ${err}`);
    await sleep(10000);
    return await createFancurveToken(cedarToken, fcTierId);
  }
}

//* add token attributes on Cedar and Fancuve
async function addTokenAttribute(tokenId, tierAttributes) {
  try {
    const attributes = tierAttributes;
    // adding attributes to Cedar
    const response = await addCedarTokenAttribute(tokenId, attributes);
    console.log('Cedar add token attributes status: ', response.status);
    if (response.status === 200) {
      // adding attributes to Fancurve

      const FcResponse = await addFancurveTokenAttribute(tokenId, attributes);

      let latestToken = collectionsLogs.collection.tokens.length - 1;
      if (!collectionsLogs.collection.tokens[latestToken].attributes) {
        collectionsLogs.collection.tokens[latestToken].attributes = [];
      }
      collectionsLogs.collection.tokens[latestToken].attributes.push(...attributes)

      await writeCollectionLogs();
      // console.log('FC added token attributes: ', FcResponse.data);
    }
  }catch(err){
    addToLogs(`Error Catch (addTokenAttribute) =  ${err}`);
  }
}
async function addCedarTokenAttribute(tokenId,attributes){
  try {
    addToLogs(`Cedar: Adding token attributes for ${tokenId}`);
    const response = await client.post(ENDPOINTS.ADD_TOKEN_ATTRIBUTE(tokenId), attributes);
    console.log('Cedar add token attributes status: ', response.status);
    if (response.status === 200) {
      addToLogs(`Cedar: Successfully added token attributes for ${tokenId}`);
      return response
    }
  }catch (err) {
    addToLogs(`Error Catch (addCedarTokenAttribute) =  ${err}`);
    await sleep(10000);
    return await addCedarTokenAttribute(tokenId,attributes);
  }
}
async function addFancurveTokenAttribute(tokenId,attributes){
  try {

    addToLogs(`Fancurve: Adding token attributes for ${tokenId}`);
    const FcResponse = await fcAddTokenAttributes(tokenId, attributes);

    if(!FcResponse) {
      addToLogs(`Error = add cedar token attributes`);
    }
    else {
      addToLogs(`Fancurve: Successfully added token attributes for ${tokenId}`);
    }
  }catch (err) {
    addToLogs(`Error Catch (addFancurveTokenAttribute) =  ${err}`);
    await sleep(10000);
    return await addFancurveTokenAttribute(tokenId, attributes);
  }
}
//* ⬆️ Uploads 🌅 token content (image file) needs tokenId, that will come after token creation
async function uploadTierContent(tier, pathToFile, fileName, index = 0) {
  try{
    const form = new FormData();
    console.log('Path to file: ', pathToFile);
    const mainImageData = fs.readFileSync(pathToFile);
    form.append('dtoFile', mainImageData, fileName);
    const response = await fileToBlob(tier.cedarTierId, pathToFile,fileName,index,form);
    await updateFancurveTokenImage(tier.fcTierId, pathToFile, fileName, index)
  } catch(err) {
    addToLogs(`Error Catch (uploadTokenContent) =  ${err}`);
    return await uploadTierContent(tier, pathToFile, fileName, index)
  }
}
async function fileToBlob(tierId, pathToFile,fileName,index,form){
  try {
    addToLogs(`Uploading Cedar tier ${tierId} content = ${fileName}`);
    const response = await client.post(
        `/Tier/${tierId}/Files/${index}`,
        form,
        {
          headers: {
            ...form.getHeaders(),
          },
          'maxContentLength': Infinity,
          'maxBodyLength': Infinity
        }
    );
    if(!response) {
      addToLogs(`Error = uploading cedar tier content`);
    }
    else {
      addToLogs(`Successfully uploaded Cedar tier ${tierId} content = ${fileName}`);
    }

    console.log('file content response: ', response.data);
    return response;
  } catch (err) {
    console.log('Catch error: ', err);
    addToLogs(`Error Catch (fileToBlob) =  ${err}`);
    await sleep(10000);
    await fileToBlob(pathToFile,fileName,index,form);
  }
}

/*
 * Upload user terms and condition file
 */

async function uploadUserTermsAndConditions(directory, fileName) {
  try {
    const form = new FormData();
    const pathToFile = `${directory}/${fileName}`;
    const mainImageData = fs.readFileSync(pathToFile);
    form.append('file', mainImageData, fileName);
    addToLogs(`Uploading Terms & Conditions to cedar`);
    const response = await client.post(ENDPOINTS.UPLOAD_USER_TERMS_FILE(COLLECTION_ID), form, {
      headers: {
        ...form.getHeaders(),
      },
    });
    if(!response) addToLogs(`Error = uploading cedar user Terms and conditions`);
    else {
      addToLogs(`Successfully uploaded Terms & Conditions to cedar`);
    }

    console.log('Terms and conditions response from cedar: ', response.data);
    collectionsLogs.collection.termsAndCondition = {...response.data};
    await writeCollectionLogs()
    await sleep(5000)
    return response;
  }catch(err){
    addToLogs(`Error Catch (uploadUserTermsAndConditions) =  ${err}`);
    await sleep(10000);
    await uploadUserTermsAndConditions(directory,fileName);
  }
}





async function createMultipleTokens() {
  for (let i = 1; i <= TOTAL_TOKENS_TO_MINT; i++) {
    //Create Token
    TOKEN_ID = await createToken();
    ENDPOINTS.ADD_TOKEN_ATTRIBUTE = `/Token/${TOKEN_ID}/Attributes`;
    console.log('token id: ', TOKEN_ID);

    // add Token Attribute
    await addTokenAttribute(TOKEN_ID);


    for (let u = 0; u < 4; u++) {
      //upload token image file
      await uploadTokenContent(
        `${__dirname}/photos/2.png`,
        '2.png',
        u
      );
    }


    if(i === TOTAL_TOKENS_TO_MINT) {
      await deployCollection()
    }
  }
}

//
// /*
//  * Reads files from ./photos dir
//  * creates token
//  * uploads token image file
//  * */
// async function readAndUploadFiles() {
//   const directoryPath = path.join(__dirname, './photos');
//   await fs.readdir(directoryPath, async function (err, files) {
//     if (err) {
//       return console.log('Unable to scan directory: ' + err);
//     }
//     console.log('reading directory = ', directoryPath);
//     addToLogs(`reading directory =  ${directoryPath}`);
//
//     files.forEach(async function (file) {
//       const pathToFile = `${directoryPath}/${file}`;
//       await createAndUploadToken(pathToFile);
//     });
//   });
// }
//
//
// /*
//  * creates token
//  * uploads token image file
//  * */
// async function createAndUploadToken(file, fileName) {
//   // console.log("using photo = ", file);
//   addToLogs(`using photo =  ${fileName}`);
//
//   const token = await createToken();
//   // console.log("created token = ", token);
//   addToLogs(`created token id = ${token}`);
//   const upload = await uploadTokenContent(token, file);
//   // console.log("uploaded data for token id", token, file);
//   addToLogs(`uploaded data for token id = ${token}, filename = ${fileName}`);
//   //console.log("Uploaded data ", upload);
// }
//

//
// /*
//  * mints a collection
//  * */
async function mintCollection() {
  try {
    // const data = JSON.stringify(COLLECTION_ID);
    // console.log("Minting collection = ", COLLECTION_ID);
    addToLogs(`Minting collection =  ${COLLECTION_ID}`);
    console.log(`${ENDPOINTS.MINT(COLLECTION_ID)}`)
    const response = await client.post(`${ENDPOINTS.MINT(COLLECTION_ID)}`);
    addToLogs(`Minted collection =  ${COLLECTION_ID}`);
    console.log('minted - ', response.data)
    return response;
  }catch (err){
    addToLogs(`Error Catch (mintCollection) =  ${err}`);
    await sleep(10000);
    return await mintCollection()
  }
}
// /*
//  * deploys a collection
//  * */
async function deployCollection() {
  try {
    // const data = JSON.stringify(COLLECTION_ID);
    // console.log("Minting collection = ", COLLECTION_ID);
    addToLogs(`Deploying collection =  ${COLLECTION_ID}`);
    const response = await client.post(`${ENDPOINTS.DEPLOY(COLLECTION_ID)}`);
    if(response) {
      addToLogs(`Deployed collection =  ${COLLECTION_ID}`);
      console.log('deploeyd - ', response.data)
      sleep(5000)
      mintCollection()
    }
    return response;
  } catch (err) {
    addToLogs(`Error Catch (mintCollection) =  ${err}`);
    await sleep(10000);
    return await deployCollection()
  }
}
//
// // /*
// //  * creates token with `collectionId`
// //  * */
// // async function createToken() {
// //   const response = await client.post(`${ENDPOINTS.CREATE_TOKEN}`, {
// //     CollectionId: COLLECTION_ID,
// //     TargetCopies: 1,
// //   });
// //   return response.data;
// // }
//
// /*
//  * reads a collection
//  * */
// async function getCollection() {
//   try{
//     const collection = await client.get(`${ENDPOINTS.GET_COLLECTION}/5`);
//     return collection.data;
//   }catch(err){
//     addToLogs(`Error Catch (getCollection) =  ${err}`);
//     await sleep(2000);
//     await getCollection()
//   }
// }
//
// main();
//
// const saveLogToFile = async (content) => {
//   fs.createWriteStream(`./logs/test.log`, content, (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log('Log written');
//     //file written successfully
//   });
// };
// //
// const addToLogs = async (content) => {
//   // LOGS = LOGS + '\n' + content
//   console.log(content);
//   stream.write(content + '\n');
// };
// const endWriteStream = () => {
//   stream.end();
// };

// addToLogs('test')
// addToLogs('test 2')
// addToLogs('test 3')
// endWriteStream()
// saveLogToFile(LOGS)

//* Main function/Entry point
(async () => {
  await main();
  endWriteStream()
})();

const saveLogToFile = async (content) => {
  fs.createWriteStream(`./logs/test.txt`, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Log written');
    //file written successfully
  });
};

// addToLogs('test')
// addToLogs('test 2')
// addToLogs('test 3')
// endWriteStream()
// saveLogToFile(LOGS)
