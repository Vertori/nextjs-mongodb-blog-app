import { handleGithubLogin, login } from "@/lib/action";

const LoginPage = () => {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with github</button>
      </form>
      <form action={login}>
        <input
          className="text-black"
          type="text"
          placeholder="username"
          name="username"
        />
        <input
          className="text-black"
          type="password"
          placeholder="password"
          name="password"
        />
        <button>Login with Credentials</button>
      </form>
    </div>
  );
};

export default LoginPage;
