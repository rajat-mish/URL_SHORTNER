import mongoose from "mongoose";
import crypto from 'crypto';


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
 avatar: {
    type: String,
    required: false,
    //add gravatar default
    default: function() {
      return getGravatarUrl(this.email);
    },
  },
}, { timestamps: true });

userSchema.methods.comparePassword = function (password) {
  return this.password === password;
};

function getGravatarUrl(email) {
  const hash = crypto.createHash('md5').update(email.trim().toLowerCase()).digest('hex');
  return `https://www.gravatar.com/avatar/${hash}?d=mp`;
}

export default mongoose.model("User", userSchema);