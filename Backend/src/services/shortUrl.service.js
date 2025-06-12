import { generatenanoid } from "../utils/helper.js";
import { saveshortUrl, getshortUrlWithCustom } from "../dao/shortUrl.js";

// ✅ For anonymous users
export const createShortUrlWithoutUser = async (originalUrl) => {
  const shortUrl = generatenanoid(8);
  if (!shortUrl) {
    throw new Error("shorturl not generated");
  }
  await saveshortUrl(shortUrl, originalUrl); // ✅ correct order
  return shortUrl;
};

// ✅ For signed-in users
export const createShortUrlWithUser = async (originalUrl, userId, customShortUrl = null) => {
  const shortUrl = customShortUrl || generatenanoid(8);

  // ❗ Only check for conflict if a custom short URL is provided
  if (customShortUrl) {
    const exists = await getshortUrlWithCustom(customShortUrl);
    if (exists) {
      throw new Error("This custom URL already exists");
    }
  }

  if (!shortUrl) {
    throw new Error("shorturl not generated");
  }

  await saveshortUrl(shortUrl, originalUrl, userId);
  return shortUrl;
};
