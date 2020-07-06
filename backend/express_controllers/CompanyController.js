let CompanyModel = require("../models/company.model");

//Express function to get all companies
exports.companyListAll = async (req, res) => {
  let allCompanies = await CompanyModel.find();
  res.json(allCompanies);
};

//Express function to get company by name
exports.companyFindByName = async (req, res) => {
  let company = await CompanyModel.find({
    companyName: req.params.companyName,
  });
  res.json(company);
};

//Express function to create company
exports.companyCreate = async (req, res) => {
  let newCompany = new CompanyModel(req.body);
  let savedCompany = await newCompany.save();
  res.json(savedCompany);
};

//Express function to get all Sales
exports.getAllSales = async (req, res) => {
  let allCars = await CompanyModel.find({
    companyName: req.params.companyName,
  }).populate("sales");
  res.json(allCars);
};
