const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: String,
  price: Number,
  describe: String,
});

const productModel = mongoose.model("products", ProductSchema);

module.exports = productModel;
