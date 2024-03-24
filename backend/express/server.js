const express = require("express");

const app = express();

const appRouter = require("./routes/routes");
app.use("/", appRouter);

app.listen(3001);
