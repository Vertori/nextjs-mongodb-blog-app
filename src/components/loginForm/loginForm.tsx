"use client";

import { login } from "@/lib/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const router = useRouter();
  const [state, formAction] = useFormState(login, undefined);

  //   useEffect(() => {
  //     state?.success && router.push("/");
  //   }, [state?.success, router]);

  return (
    <form className="flex flex-col text-center gap-[30px]" action={formAction}>
      <input
        className="p-5 border-none rounded-md bg-[#0d0c22] text-[#e5e5e5]"
        type="text"
        placeholder="username"
        name="username"
      />
      <input
        className="p-5 border-none rounded-md bg-[#0d0c22] text-[#e5e5e5]"
        type="password"
        placeholder="password"
        name="password"
      />
      <button className="p-5 cursor-pointer font-bold border-none rounded-md bg-blue-500 hover:bg-blue-600 transition text-white">
        Login
      </button>
      <span className="text-red-500 font-semibold">{state?.error}</span>
      <span className="flex flex-col sm:flex-row justify-center items-center gap-2">
        Don't have an account?
        <Link
          className="font-bold hover:text-blue-500 transition"
          href="/register"
        >
          Register
        </Link>
      </span>
    </form>
  );
};

export default LoginForm;
