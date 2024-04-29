import { StringInputType } from "./project-wide";

export type AuthInputField = "email" | "password1" | "password2";

export type AuthFormDataType = {
  [key: string]: StringInputType;
  email: StringInputType;
  password1: StringInputType;
  password2: StringInputType;
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
