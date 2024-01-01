import { handleGithubLogin } from '@/lib/action'

const LoginPage = () => {
  return (
    <div>
      <form action={handleGithubLogin}>
      <button>Login with github</button>
      </form>
    </div>
  )
}

export default LoginPage