import { generatenanoid } from "../utils/helper.js";
import {  createShortUrlWithoutUser } from "../services/shortUrl.service.js";
import { getshortUrl } from "../dao/shortUrl.js";
import { tryCatchWrapper } from "../utils/tryCatchWrapper.js";

export const createShortUrl= tryCatchWrapper(async(req,res)=>{
    const {url}=req.body;
   const shortUrl=await createShortUrlWithoutUser(url);
   res.send(process.env.APP_URL+ shortUrl);
})

export const redirectFromShortUrl = tryCatchWrapper(async (req, res) => {
    const{shortUrl}=req.params;
    const url=await getshortUrl(shortUrl);
    console.log(url);
    res.redirect(url);
})