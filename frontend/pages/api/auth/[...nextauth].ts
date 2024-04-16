import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dotenv from "dotenv";
dotenv.config();

export default NextAuth({
  session: { strategy: "jwt", maxAge: 10 * 60 },
  secret: process.env.NEXTAUTH_SECRET,
  site: process.env.NEXTHAUTH_URL,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      authorize: async (credentials, req) => {
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
        if (responseData.user)
          return { email: responseData.user, jwt: responseData.jwt };

        return null;
      },
      pages: {
        signIn: "/auth",
        signOut: "/",
        error: "/",
        accessDenied: "/access-denied",
      },
    }),
  ],
});
