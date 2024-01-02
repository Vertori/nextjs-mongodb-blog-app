import RegisterForm from "@/components/registerForm/registerForm";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center my-10 xl:mt-0">
      <div className="w-full max-w-[500px] p-[50px] rounded-md bg-[#2d2b42]">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
