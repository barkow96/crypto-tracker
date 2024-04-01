const express = require("express");
const appRouter = require("./routes/routes");

const app = express();

app.use("/", appRouter);

app.listen(3001, () => {
  console.log("Backend running on port 3001");
});
