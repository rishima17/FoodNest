import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import path from "path";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoutes.js";
import CartRouter from "./routes/cartRoutes.js";

import OrderRouter from "./routes/orderRoutes.js";
import { fileURLToPath } from "url";

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env explicitly from Backend folder
dotenv.config({ path: path.resolve(__dirname, ".env") });

console.log("Stripe Key:", process.env.STRIPE_SECRET_KEY);
console.log("JWT Key:", process.env.JWT_SECRET);





// App Config
const app = express();
const port = 8080;

// Middlewares
app.use(express.json());
app.use(cors());

// Static images (from uploads folder)
app.use("/images", express.static("uploads"));

// DB connection
connectDB();

// API routes
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart",CartRouter)
app.use("/api/order",OrderRouter)

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(` Server started on http://localhost:${port}`);
});
