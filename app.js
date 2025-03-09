const express = require("express");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

const flavoringRoutes = require("./routes/flavorings");

app.use("/api/flavorings", flavoringRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
