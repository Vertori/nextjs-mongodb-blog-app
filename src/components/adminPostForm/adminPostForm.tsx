"use client";

import { addPost } from "@/lib/action";
import React from "react";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }: { userId: string }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <form action={formAction} className="text-black">
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" placeholder="title" name="title" />
      <input type="text" placeholder="slug" name="slug" />
      <input type="text" placeholder="img" name="img" />
      <textarea placeholder="desc" rows={10} name="desc" />
      <button>Add</button>
      {state && state.error}
    </form>
  );
};

export default AdminPostForm;
