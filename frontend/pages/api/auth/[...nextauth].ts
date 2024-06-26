import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dotenv from "dotenv";
dotenv.config();

export default NextAuth({
  session: { strategy: "jwt", maxAge: 10 * 60 },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        if (!credentials) throw new Error("No credentials provided!");

        const { email, password } = credentials;
        const response = await fetch("http://localhost:1337/api/auth/local", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ identifier: email, password: password }),
        });
        const responseData = await response.json();

        if (
          !responseData.user &&
          responseData.error &&
          responseData.error.name === "ValidationError"
        )
          throw new Error("Invalid email or password!");
        else if (!responseData.user && responseData.error)
          throw new Error("An error occured, you cannot log in!");

        const user: User = {
          id: responseData.user.id,
          email: responseData.user.email,
          name: responseData.jwt,
        };

        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      return {
        ...session,
        user: {
          email: session.user.email,
          jwt: token.name,
        },
      };
    },
  },
});
