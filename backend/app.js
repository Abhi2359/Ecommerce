require("dotenv").config({ path: "./backend/config/config.env" });
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");

const errorMiddleware = require("./middleware/error");
app.use(express.json());
app.use(cookieParser());
app.use(cors())
// Route Imports

const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);

// MiddleWare For Error
app.use(errorMiddleware);
module.exports = app;
