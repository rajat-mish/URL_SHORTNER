import urlschema from '../models/shorturl.model.js';
import { ConflictError } from "../utils/errorHandler.js";

export const saveshortUrl = async (shortUrl, originalUrl, userId) => {

  try{
    const newUrl = new urlschema({
      originalUrl,
    shortUrl,
      clicks: 0,
    });

    if (userId) {
      newUrl.user = userId; // Associate the user if userId is provided
    }
   await newUrl.save()
  }
  catch(error){
    console.log(error.message);
    if(error.code === 11000) {
      // Duplicate key error, handle it as a conflict
     throw new ConflictError(error);
    }
    throw new Error(error);
    
  }

  console.log("Saving to DB:", { shortUrl, originalUrl });

     
}


export const getshortUrl = async (shortUrl) => {
   
  const url = await urlschema.findOne({ shortUrl });
    if (!url) {
        throw new Error('Short URL not found');
    }
    // Increment the click count
    url.clicks += 1;
    await url.save();
    return url.originalUrl; // Return the original URL
}

// export const getshortUrlWithCustom = async (shortUrl) => {
//   const url = await urlschema.findOne({ shortUrl });
//   if (!url) {
//       throw new Error('Short URL not found');
//   }
//   // Increment the click count
//   url.clicks += 1;
//   await url.save();
//   return url.originalUrl; // Return the original URL
// }

export const getshortUrlWithCustom = async (shortUrl) => {
  const url = await urlschema.findOne({ shortUrl });
  return url; // will return null if not found — perfect for existence check
};
