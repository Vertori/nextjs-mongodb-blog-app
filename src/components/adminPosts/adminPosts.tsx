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
        <div className="post" key={post.id}>
          <div className="detail">
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
            <button className="postButton">Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
