"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectWithDb } from "./utils";
import { signIn, signOut } from "./auth";

export const addPost = async (formData: FormData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectWithDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectWithDb();
    await Post.findByIdAndDelete(id);
    console.log("Deleted from db!");
    revalidatePath("/blog");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (formData: FormData) => {
  const { username, email, password, passwordRepeat, img } =
    Object.fromEntries(formData);
  // if passwords do not match
  if (password !== passwordRepeat) {
    return "Passwords aren't the same!";
  }

  try {
    connectWithDb();
    const user = await User.findOne({ username });
    // if user is already in db
    if (user) {
      return "Username already exists";
    }

    // if user doesn't exist in db
    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    console.log("saved to db");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const login = async (formData: FormData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
