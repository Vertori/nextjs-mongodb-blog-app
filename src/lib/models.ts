import mongoose, { Document } from "mongoose";
import { it } from "node:test";

export interface UserInterface extends Document {
  username: string;
  email: string;
  password: string;
  img?: string;
  isAdmin: boolean;
}

export interface PostInterface extends Document {
  title: string;
  desc: string;
  img?: string;
  userId: string;
  slug: string;
  createdAt?: string;
}

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

// if there is a user - use it, if not - create a new one
export const User =
  mongoose.models.User || mongoose.model<UserInterface>("User", userSchema);
export const Post =
  mongoose.models.Post || mongoose.model<PostInterface>("Post", postSchema);
