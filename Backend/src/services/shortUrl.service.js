import { generatenanoid } from "../utils/helper.js";
import urlschema from "../models/shorturl.model.js";
import { saveshortUrl } from "../dao/shortUrl.js";

export const createShortUrlWithoutUser = async (originalUrl) => {
 const shortUrl = generatenanoid(8);
 if(!shortUrl){
    throw new Error("shorturl not generated");
 }
 await saveshortUrl(shortUrl, originalUrl);
    return shortUrl;
};

export const createShortUrlWithUser = async (originalUrl, userId) => {
 const shortUrl = generatenanoid(8);
 await saveshortUrl(shortUrl, originalUrl, userId);
    return shortUrl;
}
