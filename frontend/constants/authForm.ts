import { AuthFormDataType, SubmittedAuthFormDataType } from "@/types/auth";
import { StringInputType } from "@/types/project-wide";

export const initialInput: StringInputType = {
  value: "",
  isValid: false,
  isTouched: false,
  validationMessage: null,
};

export const initialFormData: AuthFormDataType = {
  email: initialInput,
  password1: initialInput,
  password2: initialInput,
};

export const exampleFormData: AuthFormDataType = {
  email: {
    value: "test@test.com",
    isValid: true,
    isTouched: true,
    validationMessage: null,
  },
  password1: {
    value: "test1234",
    isValid: true,
    isTouched: true,
    validationMessage: null,
  },
  password2: {
    value: "test1234",
    isValid: true,
    isTouched: true,
    validationMessage: null,
  },
};

export const initialSubmittedFormData: SubmittedAuthFormDataType = {
  data: { email: "", password1: "", password2: "" },
};
