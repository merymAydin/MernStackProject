const express = require("express");
const router = express.Router();

//Creating routes
const categoryRoute = require("./categories");
const productRoute = require("./products");

//defining route infos as URL
//localhost:5000/api/categories
router.use("/categories", categoryRoute);
//localhost:5000/api/products
router.use("/products", productRoute);

module.exports = router;