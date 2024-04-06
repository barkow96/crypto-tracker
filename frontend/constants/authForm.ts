import { FormDataType, InputType, SubmittedFormDataType } from "@/types/auth";

export const initialInput: InputType = {
  value: "",
  isValid: false,
  isTouched: false,
  validationMessage: null,
};

export const initialFormData: FormDataType = {
  email: initialInput,
  password1: initialInput,
  password2: initialInput,
};

export const exampleFormData: FormDataType = {
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

export const initialSubmittedFormData: SubmittedFormDataType = {
  email: "",
  password1: "",
  password2: "",
};
