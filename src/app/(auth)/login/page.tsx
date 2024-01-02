import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/action";
import { FaGithub } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center my-10 xl:mt-0">
      <div className="w-full max-w-[500px] p-[50px] rounded-md bg-[#2d2b42]">
        <form action={handleGithubLogin}>
          <button className="w-full bg-white hover:bg-gray-200 transition text-black mb-5 p-5 cursor-pointer flex justify-center items-center gap-4">
            Login with GitHub <FaGithub className="text-2xl" />
          </button>
        </form>
        <div className="flex justify-center mb-5">
          <span>OR</span>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
