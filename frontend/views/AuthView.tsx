import AuthForm from "@/components/Authentication/AuthForm";
import PageContentLayout from "@/containers/PageContentLayout";

const AuthView: React.FC = () => {
  return (
    <main>
      <PageContentLayout heading="Log in or sign up to the world of crypto - CryptoPulse!">
        <AuthForm />
      </PageContentLayout>
    </main>
  );
};

export default AuthView;
