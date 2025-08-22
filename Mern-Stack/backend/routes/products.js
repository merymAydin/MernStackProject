const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Create a new product
router.post('/', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create product" });
  }
});

//Get products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().populate('category');
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

//Get product by id
router.get('/:productid', async (req, res) => {
  try {
    const productId = req.params.productid;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

//update product 
router.put('/:productid', async (req, res) => {
  try {
    const productId = req.params.productid;
    const updatedInfo = req.body;
    
    const updatedProduct = await Product.findById(productId);
    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    const updated = await Product.findByIdAndUpdate(productId,updatedInfo);
    res.status(200).json(updated);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update product" });
  }
});

//Delete product
router.delete('/:productid', async (req, res) => {
  try {
    const productId = req.params.productid;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to delete product" });
  }
});

module.exports = router;