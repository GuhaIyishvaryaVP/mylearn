const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");

const DB = process.env.MANGODB_LOCAL_DATABASE;

const port = process.env.PORT;

mongoose.connect(DB).then(() => {
  console.log("ishu database");
  app.listen(port, () => {
    console.log("app is running...ishuuuuuu............");
  });
});
