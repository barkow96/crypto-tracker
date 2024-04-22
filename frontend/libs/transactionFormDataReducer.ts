import {
  TransactionActionType,
  TransactionFormDataType,
} from "@/types/portfolio-panel/portfolio-table";
import {
  checkIfLettersAndDigitsOnly,
  checkIfPositiveNumber,
  checkIfTransactionTypeAllowed,
} from "./validation";

export default function transactionFormDataReducer(
  state: TransactionFormDataType,
  action: TransactionActionType
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

      if (selectedProperty === "coinName")
        validation = checkIfLettersAndDigitsOnly(checkedValue);
      else if (selectedProperty === "type") {
        console.log("hehe");
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
  }
}
