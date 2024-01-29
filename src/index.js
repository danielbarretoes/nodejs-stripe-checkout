import express from "express";
import paymentRoutes from "./routes/payment.routes.js";
import { PORT } from "./config.js";
import path from "path";

// Initializations
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use(paymentRoutes);

// Static files
app.use(express.static(path.resolve("src/public")));

// Start Server
app.listen(PORT);
console.log("Server on port", PORT);
