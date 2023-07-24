const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3300;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("Hello World!");
});

// Error route
app.use((req, res) => {
  res.status(404).json({ error: { message: `Not found!` } });
});

// Initialize the connection
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
