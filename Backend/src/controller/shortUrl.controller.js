import { generatenanoid } from "../utils/helper.js";
import {  createShortUrlWithoutUser ,createShortUrlWithUser } from "../services/shortUrl.service.js";
import { getshortUrl } from "../dao/shortUrl.js";
import { tryCatchWrapper } from "../utils/tryCatchWrapper.js";

export const createShortUrl= tryCatchWrapper(async(req,res)=>{
    const data=req.body;
          let shortUrl;
          if(req.user){
            shortUrl=await createShortUrlWithUser(data.originalUrl,req.user._id,data.customShortUrl);
          }
          else{
            shortUrl=await createShortUrlWithoutUser(data.originalUrl);
          }
    
  
   res.status(200).json({shortUrl:process.env.APP_URL+ shortUrl});
})



export const redirectFromShortUrl = tryCatchWrapper(async (req, res) => {
    const{shortUrl}=req.params;
    const url=await getshortUrl(shortUrl);
    console.log(url);
    res.redirect(url);
})

export const createCustomShortUrl = tryCatchWrapper(async (req, res) => {
    const { originalUrl, customShortUrl } = req.body;
    const shortUrl = await createShortUrlWithUser(originalUrl, customShortUrl, req.user._id);
    res.status(200).json({ shortUrl: process.env.APP_URL + shortUrl });
  });
   