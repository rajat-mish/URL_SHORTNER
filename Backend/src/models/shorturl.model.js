import mongoose from "mongoose";
const shortUrlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true, // Good: avoids duplicate codes
  },
  clicks: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  }
}, { timestamps: true });


export default mongoose.model("ShortUrl", shortUrlSchema);