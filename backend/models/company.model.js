const mongoose = require("mongoose");
const saleModel = require("./sale.model");

const Schema = mongoose.Schema;

const companySchema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    sales: {
      type: [saleModel.schema],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
