import AuthView from "@/views/AuthView";
import Head from "next/head";

export default function AuthPage() {
  return (
    <div>
      <Head>
        <title>CryptoPulse: auth</title>
        <meta
          name="description"
          content="Login or signup to the world of crypto - CryptoPulse!"
        />
      </Head>
      <AuthView />
    </div>
  );
}
