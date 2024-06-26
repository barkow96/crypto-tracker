import {
  TransactionActionType,
  TransactionFormDataType,
} from "@/types/portfolio-panel/portfolio-table";
import {
  checkIfLettersAndDigitsOnly,
  checkIfPositiveNumber,
  checkIfTransactionTypeAllowed,
} from "./validation";
import { initialFormData } from "@/constants/transactionForm";

export default function transactionFormDataReducer(
  state: TransactionFormDataType,
  action: TransactionActionType
) {
  const selectedProperty =
    action.task === "UPDATE" || action.task === "VALIDATE"
      ? action.property
      : undefined;
  const selectedAction = action.task;

  switch (selectedAction) {
    case "UPDATE":
      if (!selectedProperty) return state;
      const newValue = action.payload;

      return {
        ...state,
        [action.property]: {
          value: newValue,
          isValid: state[selectedProperty].isValid,
          isTouched: state[selectedProperty].isTouched,
          validationMessage: state[selectedProperty].validationMessage,
        },
      };
    case "VALIDATE":
      if (!selectedProperty) return state;

      const checkedValue = state[selectedProperty].value;
      let validation = { test: false, message: "" };

      if (selectedProperty === "coinName")
        validation = checkIfLettersAndDigitsOnly(checkedValue);
      else if (selectedProperty === "type") {
        validation = checkIfTransactionTypeAllowed(checkedValue);
      } else if (selectedProperty === "date")
        validation = { test: true, message: "" };
      else if (selectedProperty === "price" || selectedProperty === "quantity")
        validation = checkIfPositiveNumber(checkedValue);

      return {
        ...state,
        [selectedProperty]: {
          value: checkedValue,
          isValid: validation.test,
          validationMessage: validation.message,
          isTouched: true,
        },
      };

    case "RESET":
      return initialFormData;
  }
}
