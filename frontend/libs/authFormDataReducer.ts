import {
  checkIfEmailCorrect,
  checkIfPasswordCorrect,
  checkIfPasswordsMatch,
} from "./validation";
import { AuthFormDataType, AuthActionType } from "@/types/auth";

export default function authFormDataReducer(
  state: AuthFormDataType,
  action: AuthActionType
) {
  const selectedProperty = action.property;
  const selectedAction = action.task;

  switch (selectedAction) {
    case "UPDATE":
      const newValue = action.payload;
      return {
        ...state,
        [selectedProperty]: {
          value: newValue,
          isValid: state[selectedProperty].isValid,
          isTouched: state[selectedProperty].isTouched,
          validationMessage: state[selectedProperty].validationMessage,
        },
      };
    case "VALIDATE":
      const checkedValue = state[selectedProperty].value;
      let validation = { test: false, message: "" };

      if (selectedProperty === "email")
        validation = checkIfEmailCorrect(checkedValue);
      else if (selectedProperty === "password1")
        validation = checkIfPasswordCorrect(checkedValue);
      else if (selectedProperty === "password2")
        validation = checkIfPasswordsMatch(
          state.password1.value,
          state.password2.value
        );

      return {
        ...state,
        [selectedProperty]: {
          value: checkedValue,
          isValid: validation.test,
          validationMessage: validation.message,
          isTouched: true,
        },
      };
  }
}
