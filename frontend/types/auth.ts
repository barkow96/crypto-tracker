import { InputType } from "./project-wide";

export type AuthInputField = "email" | "password1" | "password2";

export type AuthFormDataType = {
  [key: string]: InputType;
  email: InputType;
  password1: InputType;
  password2: InputType;
};

export type SubmittedAuthFormDataType = {
  data: {
    [key: string]: string;
    email: string;
    password1: string;
    password2: string;
  };
};

export type AuthActionType =
  | { task: "UPDATE"; property: AuthInputField; payload: string }
  | { task: "VALIDATE"; property: AuthInputField };
