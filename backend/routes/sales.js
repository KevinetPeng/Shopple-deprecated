const router = require("express").Router(); //require express router
let Sale = require("../models/sale.model"); //require Sale model

//If GET request on .../sales/, then respond with sales in JSON format
//If there is an error, respond with error 400 and error message
//find method is a mongoose method that returns a promise
router.route("/").get((request, response) => {
  Sale.find()
    .then((sales) => response.json(sales))
    .catch((error) => response.status(400).json("Error: " + error));
});

//POST request
router.route("/add").post((request, response) => {
  const company = request.body.company;
  const amount = Number(request.body.amount);
  const description = request.body.description;
  const endDate = Date.parse(request.body.endDate);

  //create new sale
  const newSale = new Sale({
    company,
    amount,
    description,
    endDate,
  });

  //Save new sale, and respond with error if unsuccessful
  newSale
    .save()
    .then(() => response.json("Sale added."))
    .catch((error) => response.status(400).json("Error: " + error));
});

module.exports = router;
