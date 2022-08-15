if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const tasks = require("./routes/tasks");
// const connection = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasks);

const mongoose = require("mongoose");
const mongodbURL = process.env.DATABASE_URL;
mongoose.connect(mongodbURL);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to mongoose"));

const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`));
