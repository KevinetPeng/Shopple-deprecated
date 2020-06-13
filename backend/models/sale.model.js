const mongoose = require("mongoose");
const companyModel = require("./company.model");

const Schema = mongoose.Schema;

const saleSchema = new Schema(
  {
    company: {
      type: companyModel.schema,
      required: true,
    },
    amount: {
      type: Number,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Sale = mongoose.model("Sale", saleSchema);

module.exports = Sale;
