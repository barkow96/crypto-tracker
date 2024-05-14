import { colors } from "@/constants/colors";
import { ActionType, InputField, InputType } from "@/types/auth";
import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { Dispatch } from "react";

type AuthInputType = {
  name: InputField;
  type: string;
  label: string;
  placeholder: string;
  inputData: InputType;
  dispatch: Dispatch<ActionType>;
};

const AuthInput: React.FC<AuthInputType> = ({
  name,
  type,
  label,
  placeholder,
  inputData,
  dispatch,
}) => {
  return (
    <FormControl id={name}>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
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
        <Text color={colors.red} fontWeight="bold">
          {inputData.validationMessage}
        </Text>
      )}
    </FormControl>
  );
};

export default AuthInput;
