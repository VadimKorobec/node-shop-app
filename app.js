const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

const flavoringRouter = require("./routes/flavorings");
const booksRouter = require('./routes/books')

app.use("/api/flavorings", flavoringRouter);
app.use('/api/books',booksRouter)

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

module.exports = app;