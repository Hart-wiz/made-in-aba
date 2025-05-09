import express from "express";
import { pool } from "./config/db.js";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 5000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

pool
  .connect()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => {
    console.error("Database connection error", err.stack);
    process.exit(1);
  });

app.use("/auth", authRoutes);

// ......................Login....................

app.post("auth/login", async (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
