const mongoose = require("mongoose");
const config = require("../config/index");

module.exports = async () => {
  mongoose.set("strictQuery", false);
  try {
    // const connection = await mongoose.connect(config.databaseURL);
    // return connection.connection.db;
    return "";
  } catch (err) {
    console.error(err);
  }
};
