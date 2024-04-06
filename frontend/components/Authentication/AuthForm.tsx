import {
  exampleFormData,
  initialFormData,
  initialSubmittedFormData,
} from "@/constants/authForm";
import { colors } from "@/constants/colors";
import formDataReducer from "@/libs/formDataReducer";
import { Button, Stack, Text } from "@chakra-ui/react";
import { FormEvent, useReducer, useState } from "react";
import AuthInput from "./AuthInput";
import { useRouter } from "next/router";
import { FormDataType, SubmittedFormDataType } from "@/types/auth";

type AuthModeType = "login" | "signup";
type AuthErrorType = string | null;

export default function AuthForm() {
  const router = useRouter();
  const [formData, dispatch] = useReducer(formDataReducer, exampleFormData);
  const [authMode, setAuthMode] = useState<AuthModeType>("login");
  const [authError, setAuthError] = useState<AuthErrorType>(null);

  const formIsValid =
    authMode === "login"
      ? formData.email.isValid && formData.password1.isValid
      : formData.email.isValid &&
        formData.password1.isValid &&
        formData.password2.isValid;

  function toggleHandler() {
    setAuthError(null);
    if (authMode === "login") setAuthMode("signup");
    else setAuthMode("login");
  }

  async function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const submittedFormData: SubmittedFormDataType = initialSubmittedFormData;
    for (const key in formData) submittedFormData[key] = formData[key].value;
    console.log("Submitted form data: ", submittedFormData);

    switch (authMode) {
      case "signup":
        const signupResponse = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submittedFormData),
        });

        if (signupResponse.ok) {
          console.log("Frontend signup - OK");
          const signupData = await signupResponse.json();
          console.log("Received response: ", signupData);
          // router.replace("/");
        } else {
          console.log("Frontend signup - NOT OK");
          const signupData = await signupResponse.json();
          setAuthError(signupData.message);
        }
        break;
    }
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
          colorScheme="blue"
          size="lg"
          fontSize="md"
          isDisabled={!formIsValid}
        >
          {authMode === "login" ? "Log in" : "Sign up"}
        </Button>
        <Text
          as="p"
          color={colors.gray}
          fontWeight="bold"
          cursor="pointer"
          onClick={toggleHandler}
        >
          {authMode === "login"
            ? "No account yet? Sign up!"
            : "Already registered? Log in!"}
        </Text>
        {authError && (
          <Text as="p" color={colors.red} fontWeight="bold">
            {authError}
          </Text>
        )}
      </Stack>
    </form>
  );
}
