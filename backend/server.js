require("dotenv").config({ path: "./backend/config/config.env" });
const app = require("./app");
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

const connectDataBase = require("./config/database");



// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`Shutting down the server due to uncaught Exception`);
  server.close(() => {
    process.exit(1);
  });
});

// connecting to data Base
connectDataBase();




// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`Shutting down the server due to unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
