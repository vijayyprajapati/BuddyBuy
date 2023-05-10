require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/backend/users", userRoutes);
app.use("/backend/auth", authRoutes);

// default route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
