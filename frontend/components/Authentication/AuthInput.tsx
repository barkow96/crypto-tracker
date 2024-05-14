import { colors } from "@/constants/colors";
import { AuthActionType, AuthInputField } from "@/types/auth";
import { StringInputType } from "@/types/project-wide";
import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { Dispatch } from "react";

type AuthInputType = {
  name: AuthInputField;
  type: string;
  label: string;
  placeholder: string;
  inputData: StringInputType;
  dispatch: Dispatch<AuthActionType>;
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
        <Text color={colors.reddish[900]} fontWeight="bold">
          {inputData.validationMessage}
        </Text>
      )}
    </FormControl>
  );
};

export default AuthInput;
