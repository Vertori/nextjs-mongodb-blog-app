"use client";

import { addUser } from "@/lib/action";
import React from "react";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <form action={formAction} className="flex flex-col gap-5">
      <h1>Add New User</h1>
      <input
        className="p-5 bg-[#2d2b42] border-none rounded-md text-black"
        type="text"
        placeholder="username"
        name="username"
      />
      <input
        className="p-5 bg-[#2d2b42] border-none rounded-md text-black"
        type="text"
        placeholder="e-mail"
        name="email"
      />
      <input
        className="p-5 bg-[#2d2b42] border-none rounded-md text-black"
        type="password"
        placeholder="password"
        name="password"
      />
      <input
        className="p-5 bg-[#2d2b42] border-none rounded-md text-black"
        type="text"
        placeholder="img"
        name="img"
      />
      <select
        className="p-5 bg-[#2d2b42] border-none rounded-md text-red-500"
        name="isAdmin"
      >
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button className="py-[5px] px-[10px] bg-[#DC143C] text-black rounded-md border-none cursor-pointer">
        Add
      </button>
      {state && state.error}
    </form>
  );
};

export default AdminUserForm;
