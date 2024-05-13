import { colors } from "@/constants/colors";
import {
  TransactionActionType,
  TransactionInputField,
} from "@/types/portfolio-panel/portfolio-table";
import { NumberInputType, StringInputType } from "@/types/project-wide";
import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { Dispatch } from "react";

type TransactionInputType = {
  name: TransactionInputField;
  type: string;
  label: string;
  inputData: StringInputType | NumberInputType;
  dispatch: Dispatch<TransactionActionType>;
};

const AddTransactionModalInput: React.FC<TransactionInputType> = ({
  name,
  type,
  label,
  inputData,
  dispatch,
}) => {
  return (
    <FormControl id={name}>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        value={inputData.value}
        onChange={(event) => {
          dispatch({
            task: "UPDATE",
            property: name,
            payload: event.target.value,
          });
        }}
        onBlur={() => {
          dispatch({
            task: "VALIDATE",
            property: name,
          });
        }}
      />
      {inputData.isTouched && !inputData.isValid && (
        <Text color={colors.reddish[900]} fontWeight="bold">
          {inputData.validationMessage}
        </Text>
      )}
    </FormControl>
  );
};

export default AddTransactionModalInput;
