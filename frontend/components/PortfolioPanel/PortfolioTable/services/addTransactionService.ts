import { AddTransactionService } from "@/types/portfolio-panel/portfolio-table";

const addTransactionService: AddTransactionService = (
  date,
  type,
  price,
  quantity,
  coin
) => {
  console.log("Add Transaction Service!");
  console.log("Data: ", date, type, price, quantity, coin);
};

export default addTransactionService;
