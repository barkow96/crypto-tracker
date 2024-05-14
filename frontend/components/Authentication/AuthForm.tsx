import { exampleFormData } from "@/constants/authForm";
import { colors } from "@/constants/colors";
import formDataReducer from "@/libs/authFormDataReducer";
import { Button, Stack, Text } from "@chakra-ui/react";
import { useReducer, useState } from "react";
import AuthInput from "./AuthInput";
import { useRouter } from "next/router";
import authSubmitService from "./services/authSubmitService";

export type AuthModeType = "login" | "signup";
export type AuthMessageType = { isPositive: boolean; text: string } | null;

export default function AuthForm() {
  const router = useRouter();
  const [formData, dispatch] = useReducer(formDataReducer, exampleFormData);
  const [authMode, setAuthMode] = useState<AuthModeType>("login");
  const [authMessage, setAuthMessage] = useState<AuthMessageType>(null);

  const formIsValid =
    authMode === "login"
      ? formData.email.isValid && formData.password1.isValid
      : formData.email.isValid &&
        formData.password1.isValid &&
        formData.password2.isValid;

  function toggleHandler() {
    setAuthMessage(null);
    if (authMode === "login") setAuthMode("signup");
    else setAuthMode("login");
  }

  return (
    <form
      onSubmit={(event) => {
        authSubmitService(event, router, formData, authMode, setAuthMessage);
      }}
    >
      <Stack
        spacing={4}
        width={{ lg: "50%", sm: "100%" }}
        margin="auto"
        mt="10px"
      >
        <AuthInput
          name="email"
          type="text"
          label="Email"
          placeholder="Please provide your email"
          inputData={formData.email}
          dispatch={dispatch}
        />
        <AuthInput
          name="password1"
          type="password"
          label="Password"
          placeholder="Please provide your password"
          inputData={formData.password1}
          dispatch={dispatch}
        />
        {authMode === "signup" && (
          <AuthInput
            name="password2"
            type="password"
            label="Password"
            placeholder="Please repeat the password"
            inputData={formData.password2}
            dispatch={dispatch}
          />
        )}
        <Button
          type="submit"
          isDisabled={!formIsValid}
          color={colors.darkbluish[200]}
          bg={colors.darkbluish[700]}
          _hover={{ backgroundColor: colors.darkbluish[800] }}
          size="lg"
          fontSize="md"
        >
          {authMode === "login" ? "Log in" : "Sign up"}
        </Button>
        <Text
          as="p"
          color={colors.darkbluish[800]}
          fontWeight="bold"
          cursor="pointer"
          onClick={toggleHandler}
        >
          {authMode === "login"
            ? "No account yet? Sign up!"
            : "Already registered? Log in!"}
        </Text>
        {authMessage && (
          <Text
            as="p"
            color={
              authMessage.isPositive
                ? colors.greenish[600]
                : colors.reddish[600]
            }
            fontWeight="bold"
          >
            {authMessage.text}
          </Text>
        )}
      </Stack>
    </form>
  );
}
