import { Post } from "@/lib/models";
import { connectWithDb } from "@/lib/utils";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

// GET - ENDPOINT
export const GET = async (
  request: NextApiRequest,
  { params }: { params: { slug: string } }
) => {
  const { slug } = params;
  try {
    connectWithDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

// DELETE - ENDPOINT
export const DELETE = async (
  request: NextApiRequest,
  { params }: { params: { slug: string } }
) => {
  const { slug } = params;

  try {
    connectWithDb();
    await Post.deleteOne({ slug });
    return NextResponse.json("Post deleted");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete the post!");
  }
};
