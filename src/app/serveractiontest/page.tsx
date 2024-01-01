import React from "react";
import { addPost, deletePost } from "@/lib/action";

const ServerActionTestPage = () => {
  return (
    <div className="text-black">
      {/* add post form  */}
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <button className="p-4 bg-red-400 text-lg">Test Me</button>
      </form>
      {/* delet post form  */}
      <form action={deletePost}>
        <input type="text" placeholder="postID" name="id" />
        <button className="p-4 bg-red-400 text-lg">Delete</button>
      </form>
    </div>
  );
};

export default ServerActionTestPage;
