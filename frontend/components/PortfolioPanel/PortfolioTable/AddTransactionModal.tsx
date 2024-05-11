import CustomModal from "@/components/_ChakraUI/CustomModal";
import { colors } from "@/constants/colors";
import { initialFormData } from "@/constants/transactionForm";
import transactionFormDataReducer from "@/libs/transactionFormDataReducer";
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
import { AddTransactionService } from "./services/addTransactionService";
import { useSession } from "next-auth/react";
import { Portfolio } from "@/types/portfolio-panel/choose-portfolio-panel";
import { useSubmissionMessage } from "@/hooks/portfolio-panel/useSubmissionMessage";

type AddTransactionModalProps = {
  children: React.ReactNode;
  handler: AddTransactionService;
  portfolioId: number;
  setPortolios: React.Dispatch<React.SetStateAction<Portfolio[] | undefined>>;
};

const AddTransactionModal: React.FC<AddTransactionModalProps> = ({
  children,
  handler,
  portfolioId,
  setPortolios,
}) => {
  const [formData, dispatch] = useReducer(
    transactionFormDataReducer,
    initialFormData
  );
  const { data: sessionData, status: sessionStatus } = useSession();
  const [formIsValid, setFormIsValid] = useState<boolean | null>(null);
  const { submissionMessage, setSubmissionMessage } = useSubmissionMessage();

  const validationState =
    formData.coinName.isValid &&
    formData.type.isValid &&
    formData.date.isValid &&
    formData.price.isValid &&
    formData.quantity.isValid;

  async function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validationState) {
      setFormIsValid(false);
      setSubmissionMessage({
        text: "Adding transaction failed.",
        isPositive: false,
      });
    } else {
      setFormIsValid(true);
      handler(
        sessionData?.user.jwt,
        portfolioId,
        formData.coinName.value,
        formData.date.value,
        formData.type.value,
        parseFloat(formData.price.value),
        parseFloat(formData.quantity.value),
        setPortolios
      );
      dispatch({ task: "RESET" });
      setSubmissionMessage({
        text: "Transaction created successfully! You can now add another one.",
        isPositive: true,
      });
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
            type="text"
            label="PRICE"
            inputData={formData.price}
            dispatch={dispatch}
          />
          <AddTransactionModalInput
            name="quantity"
            type="text"
            label="QUANTITY"
            inputData={formData.quantity}
            dispatch={dispatch}
          />
        </Stack>

        <Button
          type="submit"
          width="100%"
          marginTop="15px"
          isDisabled={!validationState}
          _hover={
            validationState ? { backgroundColor: colors.green } : undefined
          }
        >
          Submit transaction
        </Button>
      </form>

      {formIsValid === false && (
        <Text color={colors.red} fontWeight="bold">
          Transaction data is not correct!
        </Text>
      )}

      {submissionMessage && (
        <Text
          color={submissionMessage.isPositive ? colors.green : colors.red}
          fontWeight="bold"
        >
          {submissionMessage.text}
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
