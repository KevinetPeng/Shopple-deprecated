let SaleModel = require("../models/sale.model");

//all sales regardless of company
exports.saleListAll = async (req, res) => {
  let allSales = await SaleModel.find();
  res.json(allSales);
};

//create sale
exports.saleCreate = async (req, res) => {
  let newSale = new SaleModel(req.body);
  let savedSale = await newSale.save();
  res.json(savedSale);
};
