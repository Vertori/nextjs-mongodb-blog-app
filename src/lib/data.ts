import { Post, PostInterface, User, UserInterface } from "./models";
import { connectWithDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async (): Promise<PostInterface[]> => {
  try {
    connectWithDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug: string): Promise<PostInterface> => {
  try {
    connectWithDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id: string): Promise<UserInterface> => {
  noStore();
  try {
    connectWithDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async (): Promise<UserInterface[]> => {
  try {
    connectWithDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
