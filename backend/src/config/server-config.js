const dotenv = require("dotenv");

//configuring the dotenv file
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
};
