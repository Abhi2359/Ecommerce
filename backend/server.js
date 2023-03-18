require("dotenv").config({path:"./backend/config/config.env"});
const app = require("./app");

const connectDataBase = require("./config/database");
// Config
const port = process.env.PORT;

// connecting to data Base
connectDataBase();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



