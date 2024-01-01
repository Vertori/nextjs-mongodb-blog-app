import { register } from "@/lib/action";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-[500px] p-[50px] rounded-md bg-[#2d2b42] my-10 xl:mt-0">
        <form
          className="flex flex-col text-center gap-[30px]"
          action={register}
        >
          <input
            className="p-5 border-none rounded-md bg-[#0d0c22] text-[#e5e5e5]"
            type="text"
            placeholder="username"
            name="username"
          />
          <input
            className="p-5 border-none rounded-md bg-[#0d0c22] text-[#e5e5e5]"
            type="email"
            placeholder="e-mail"
            name="email"
          />
          <input
            className="p-5 border-none rounded-md bg-[#0d0c22] text-[#e5e5e5]"
            type="password"
            placeholder="password"
            name="password"
          />
          <input
            className="p-5 border-none rounded-md bg-[#0d0c22] text-[#e5e5e5]"
            type="password"
            placeholder="confirm password"
            name="passwordRepeat"
          />
          <button className="p-5 cursor-pointer font-bold border-none rounded-md bg-blue-500 hover:bg-blue-600 transition text-white">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
