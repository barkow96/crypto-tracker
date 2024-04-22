import { TransactionFormDataType } from "@/types/portfolio-panel/portfolio-table";
import { BuyOrSellInputType, StringInputType } from "@/types/project-wide";

export const initialInput: StringInputType = {
  value: "",
  isValid: false,
  isTouched: false,
  validationMessage: null,
};

export const buyOrSellInput: BuyOrSellInputType = {
  value: "BUY",
  isValid: true,
  isTouched: false,
  validationMessage: null,
};

export const initialFormData: TransactionFormDataType = {
  coinName: initialInput,
  type: buyOrSellInput,
  date: initialInput,
  price: initialInput,
  quantity: initialInput,
};
