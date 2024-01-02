import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { connectWithDb } from "./utils";
import { User } from "./models";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";

const login = async (credentials: { username: string; password: string }) => {
  try {
    connectWithDb();
    const user = await User.findOne({ username: credentials.username });
    if (!user) {
      throw new Error("Wrong credentials!");
    }
    // check if password is correct
    if (credentials.password !== user.password) {
      throw new Error("Wrong credentials!");
    }
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          // @ts-ignore
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(user, account, profile);
      if (account?.provider === "github") {
        connectWithDb();
        try {
          const user = await User.findOne({ email: profile?.email });
          // if there is no user, create a new one
          if (!user) {
            const newUser = new User({
              username: profile?.login,
              email: profile?.email,
              image: profile?.avatar_url,
            });
            await newUser.save();
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      }
      // if the user is already in db
      return true;
    },
    ...authConfig.callbacks,
  },
});
