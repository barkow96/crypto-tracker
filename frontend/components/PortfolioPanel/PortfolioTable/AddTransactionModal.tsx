import CustomModal from "@/components/_ChakraUI/CustomModal";
import { colors } from "@/constants/colors";
import { initialFormData } from "@/constants/transactionForm";
import transactionFormDataReducer from "@/libs/transactionFormDataReducer";
import { AddTransactionService } from "@/types/portfolio-panel/portfolio-table";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FormEvent, useReducer, useState } from "react";
import AddTransactionModalInput from "./AddTransactionModalInput";

type AddTransactionModalProps = {
  children: React.ReactNode;
  handler: AddTransactionService;
};

const AddTransactionModal: React.FC<AddTransactionModalProps> = ({
  children,
  handler,
}) => {
  const [formData, dispatch] = useReducer(
    transactionFormDataReducer,
    initialFormData
  );
  const [formIsValid, setFormIsValid] = useState<boolean | null>(null);

  async function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationState =
      formData.coinName.isValid &&
      formData.type.isValid &&
      formData.date.isValid &&
      formData.price.isValid &&
      formData.quantity.isValid;

    if (!validationState) setFormIsValid(false);
    else {
      setFormIsValid(true);
      handler(
        formData.date.value,
        formData.type.value,
        parseFloat(formData.price.value),
        parseFloat(formData.quantity.value),
        formData.coinName.value
      );
    }
  }

  const modalHeader = <Text>Add new transaction</Text>;
  const modalBody = (
    <Box>
      <form onSubmit={submitHandler}>
        <Stack>
          <AddTransactionModalInput
            name="coinName"
            type="text"
            label="COIN NAME"
            inputData={formData.coinName}
            dispatch={dispatch}
          />
          <FormControl>
            <FormLabel>TRANSACTION TYPE</FormLabel>
            <Select
              value={formData.type.value}
              onChange={(event) => {
                dispatch({
                  task: "UPDATE",
                  property: "type",
                  payload: event.target.value,
                });
              }}
              onBlur={() => {
                dispatch({
                  task: "VALIDATE",
                  property: "type",
                });
              }}
            >
              <option value="BUY">BUY</option>
              <option value="SELL">SELL</option>
            </Select>
          </FormControl>
          <AddTransactionModalInput
            name="date"
            type="date"
            label="DATE"
            inputData={formData.date}
            dispatch={dispatch}
          />

          <AddTransactionModalInput
            name="price"
            type="number"
            label="PRICE"
            inputData={formData.price}
            dispatch={dispatch}
          />
          <AddTransactionModalInput
            name="quantity"
            type="number"
            label="QUANTITY"
            inputData={formData.quantity}
            dispatch={dispatch}
          />
        </Stack>
        <Button type="submit" marginTop="15px">
          Submit transaction
        </Button>
      </form>

      {formIsValid === false && (
        <Text color={colors.red} fontWeight="bold">
          Transaction data is not correct!
        </Text>
      )}
    </Box>
  );

  return (
    <CustomModal header={modalHeader} body={modalBody}>
      {children}
    </CustomModal>
  );
};

export default AddTransactionModal;
