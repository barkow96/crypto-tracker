import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { FormEvent } from "react";

export default function AuthForm() {
  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Form submitted!");
  }

  return (
    <form
      onSubmit={(event) => {
        submitHandler(event);
      }}
    >
      <Stack
        spacing={4}
        width={{ lg: "50%", sm: "100%" }}
        margin="auto"
        mt="10px"
      >
        <FormControl id="email">
          <FormLabel>Login</FormLabel>
          <Input type="text" placeholder="Please provide your login" />
        </FormControl>
        <FormControl id="password1">
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Please provide your password" />
        </FormControl>
        <FormControl id="password2">
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Please repeat the password" />
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Sign in / Sign up
        </Button>
      </Stack>
    </form>
  );
}
