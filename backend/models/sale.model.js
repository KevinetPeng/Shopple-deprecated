// The sale model using mongdb

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const saleSchema = new Schema(
  {
    amount: {
      type: Number,
      required: false,
      min: 0,
    },
    description: {
      type: String,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
    },
  },
  {
    timestamps: true,
  }
);

const Sale = mongoose.model("Sale", saleSchema);

module.exports = Sale;
