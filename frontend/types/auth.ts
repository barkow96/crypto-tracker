export type InputField = "email" | "password1" | "password2";

export type InputType = {
  value: string;
  isValid: boolean;
  isTouched: boolean;
  validationMessage: string | null;
};

export type FormDataType = {
  email: InputType;
  password1: InputType;
  password2: InputType;
};

export type ActionType =
  | { task: "UPDATE"; property: InputField; payload: string }
  | { task: "VALIDATE"; property: InputField };
