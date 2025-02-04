require("dotenv").config();
const express = require("express");
const { default: helmet } = require("helmet");

const connectDB = require("./utils/dbConnection");

connectDB();

const app = express();

app.use(express.json());

app.use(helmet());
// console.log(first);
app.use("*", (req, res) => {
  res.status(404).json({
    message: "Route not exist",
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
