import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/lib/data";
import { PostInterface } from "@/lib/models";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog Page",
  description: "This is blog page",
};

const getData = async (): Promise<PostInterface[]> => {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Something went wrong while fetching posts...");
  }
  return res.json();
};

const BlogPage = async () => {
  // FETCH DATA WITHOUT API:
  // const posts = await getPosts();
  const posts = await getData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 ">
      {posts?.map((post) => (
        <div key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
