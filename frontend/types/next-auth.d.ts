import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: { jwt: string | null } & DefaultSession["user"];
  }
}
