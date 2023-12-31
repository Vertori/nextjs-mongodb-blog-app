import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/lib/data";
import React from "react";

const BlogPage = async () => {
  const posts = await getPosts();
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
