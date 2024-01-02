"use client";

import { addPost } from "@/lib/action";
import React from "react";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }: { userId: string }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <form action={formAction} className="flex flex-col gap-5">
      <h1>Add New Post</h1>
      <input
        className="p-5 bg-[#2d2b42] border-none rounded-md text-black"
        type="hidden"
        name="userId"
        value={userId}
      />
      <input
        className="p-5 bg-[#2d2b42] border-none rounded-md text-black"
        type="text"
        placeholder="title"
        name="title"
      />
      <input
        className="p-5 bg-[#2d2b42] border-none rounded-md text-black"
        type="text"
        placeholder="slug"
        name="slug"
      />
      <input
        className="p-5 bg-[#2d2b42] border-none rounded-md text-black"
        type="text"
        placeholder="img"
        name="img"
      />
      <textarea
        className="p-5 bg-[#2d2b42] border-none rounded-md text-black"
        placeholder="desc"
        rows={10}
        name="desc"
      />
      <button className="py-[5px] px-[10px] bg-[#DC143C] text-black rounded-md border-none cursor-pointer">
        Add
      </button>
      {state && state.error}
    </form>
  );
};

export default AdminPostForm;
