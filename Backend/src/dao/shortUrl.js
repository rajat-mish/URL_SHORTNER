import urlschema from '../models/shorturl.model.js';
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
    newUrl.save()
  }
  catch(error){
    console.log(error.message);
    if(error.code === 11000) {
      // Duplicate key error, handle it as a conflict
     throw new conflict(error);
    }
    throw new Error(error);
    
  }
     
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