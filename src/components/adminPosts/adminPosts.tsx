import { deletePost } from "@/lib/action";
import { getPosts } from "@/lib/data";
import Image from "next/image";
import React from "react";

const AdminPosts = async () => {
  const posts = await getPosts();
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div
          className="my-5 flex items-center justify-between gap-5"
          key={post.id}
        >
          <div className="flex items-center gap-5">
            <Image
              src={post.img || "/noAvatar.png"}
              alt={post.title}
              width={50}
              height={50}
            />
            <span className="postTitle">{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className="py-[5px] px-[10px] bg-[#DC143C] text-black rounded-md border-none cursor-pointer">
              Delete
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
