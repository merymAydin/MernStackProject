const express = require("express");
const router = express.Router();

//Creating routes
const categoryRoute = require("./categories");
const productRoute = require("./products");
const authorRoute = require("./authors");
//defining route infos as URL
//localhost:5000/api/categories
router.use("/categories", categoryRoute);
//localhost:5000/api/products
router.use("/products", productRoute);
//localhost:5000/api/authors
router.use("/authors", authorRoute);

module.exports = router;