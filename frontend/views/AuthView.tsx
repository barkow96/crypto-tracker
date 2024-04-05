import AuthForm from "@/components/Authentication/AuthForm";
import { Box, Heading } from "@chakra-ui/react";

const AuthView: React.FC = () => {
  return (
    <main>
      <Box width="80%" margin="auto" marginTop="50px">
        <Heading as="h5" textAlign="center" fontSize="25px">
          Login or signup to the world of crypto - CryptoPulse!
        </Heading>
        <AuthForm />
      </Box>
    </main>
  );
};

export default AuthView;
