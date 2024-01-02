"use client";

import { addUser } from "@/lib/action";
import React from "react";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <form action={formAction} className="text-black">
      <h1>Add New User</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="text" placeholder="e-mail" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input type="text" placeholder="img" name="img" />
      <select name="isAdmin">
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button>Add</button>
      {state && state.error}
    </form>
  );
};

export default AdminUserForm;
