import { Post } from "@/lib/models";
import { connectWithDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    connectWithDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};
