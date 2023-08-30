const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    groupName: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);