import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todos.js";
import dotenv from "dotenv";
dotenv.config();
const envFile = `.env.${process.env.NODE_ENV || "development"}`;
dotenv.config({ path: envFile, override: true });

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL
}));
app.use(express.json());

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
