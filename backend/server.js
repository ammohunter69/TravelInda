import express from "express";
import dotenv from "dotenv";
import path from "path";
// import products from "./data/products.js";
import connectDB from "./config/db.js";
// import chalk from "chalk";
import stateRoutes from "./routes/stateRouters.js";

dotenv.config();
connectDB();
const app = express();

app.use("/api/states", stateRoutes);

const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send(`API is running.`);
  });
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

//
//
//
//
//
//////////////////////////////////////////////////////////

// app.get("/api/products", (req, res) => {
//   res.json(products);
// });

// app.get("/api/products/:id", (req, res) => {
//   const product = products.find((p) => p._id === req.params.id);
//   res.json(product);
// });
