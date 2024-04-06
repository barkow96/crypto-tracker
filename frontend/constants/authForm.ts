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

export const initialSubmittedFormData: SubmittedFormDataType = {
  email: "",
  password1: "",
  password2: "",
};
