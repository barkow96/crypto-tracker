export type StringInputType = {
  value: string;
  isValid: boolean;
  isTouched: boolean;
  validationMessage: string | null;
};

export type NumberInputType = {
  value: string;
  isValid: boolean;
  isTouched: boolean;
  validationMessage: string | null;
};

export type BuyOrSellInputType = {
  value: "BUY" | "SELL";
  isValid: boolean;
  isTouched: boolean;
  validationMessage: string | null;
};
