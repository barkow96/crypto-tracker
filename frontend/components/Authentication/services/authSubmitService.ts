import { AuthFormDataType } from "@/types/auth";
import { FormEvent } from "react";
import { AuthMessageType, AuthModeType } from "../AuthForm";
import { initialSubmittedFormData } from "@/constants/authForm";
import { SubmittedAuthFormDataType } from "@/types/auth";
import { NextRouter } from "next/router";
import { signIn } from "next-auth/react";

type AuthSubmitService = (
  event: FormEvent<HTMLFormElement>,
  router: NextRouter,
  formData: AuthFormDataType,
  authMode: AuthModeType,
  setAuthMessage: React.Dispatch<React.SetStateAction<AuthMessageType>>
) => void;

const authSubmitService: AuthSubmitService = async (
  event,
  router,
  formData,
  authMode,
  setAuthMessage
) => {
  event.preventDefault();

  const submittedFormData: SubmittedAuthFormDataType = initialSubmittedFormData;
  for (const key in formData) submittedFormData.data[key] = formData[key].value;

  switch (authMode) {
    case "signup":
      const signupResponse = await fetch("/api/strapi/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submittedFormData),
      });

      if (signupResponse.ok) {
        setAuthMessage({
          isPositive: true,
          text: "Successfully created an account!",
        });
      } else {
        const signupData = await signupResponse.json();
        setAuthMessage({ isPositive: false, text: signupData.message });
      }
      break;
    case "login":
      const loginResponse = await signIn("credentials", {
        redirect: false,
        email: submittedFormData.data.email,
        password: submittedFormData.data.password1,
      });

      if (loginResponse && loginResponse.ok) {
        router.replace("/");
        setAuthMessage({ isPositive: true, text: "Succesfully logged in" });
      } else
        setAuthMessage({
          isPositive: false,
          text:
            loginResponse && loginResponse.error
              ? loginResponse.error
              : "Something went wrong",
        });
      break;
  }
};
export default authSubmitService;
