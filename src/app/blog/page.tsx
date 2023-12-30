import PostCard from "@/components/postCard/PostCard";
import React from "react";

const BlogPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 ">
      <div>
        <PostCard />
      </div>

      <div>
        <PostCard />
      </div>

      <div>
        <PostCard />
      </div>

      <div>
        <PostCard />
      </div>

      <div>
        <PostCard />
      </div>

      <div>
        <PostCard />
      </div>
    </div>
  );
};

export default BlogPage;
