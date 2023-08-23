import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import connectDatabase from "./src/config/dbConfig.js";
import categoryRouter from "./src/routers/categoryRouter.js";

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

const PORT = process.env.PORT || 8000;

connectDatabase();

app.use("/api/v1/category", categoryRouter);

app.use("/", (req, res, next) => {
  res.json({
    status: "success",
    message: "You have reach the end point",
  });
});

app.use((error, req, res, next) => {
  console.log(error);
  const statusCode = error.status || 404;

  res.status(statusCode).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running on port: http://localhost:${PORT}`);
});
