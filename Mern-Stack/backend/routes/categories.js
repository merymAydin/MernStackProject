const express = require("express");
const router = express.Router();
const Category = require("../models/Category");


//Create category endpoint start
router.post("/", async (req, res) => {
    try {
        const { name, image } = req.body;
        const newCategory = new Category({ name, image });
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        console.error("Error creating category:", error);
        res.status(500).send("Internal Server Error");
        
    }
});
//Create category endpoint end
/*************************** */
//Get categories endpoint start
router.get("/", async (req, res) => {
    try {
        const categoryList = await Category.find();
        res.status(200).json(categoryList);
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).send("Internal Server Error");
    }
});
//Get categories endpoint end
/**********************************************/
//Get category by ID endpoint start
//localhost:5000/api/categories/125aewsrt
router.get("/:categoryid", async (req, res) => {
    try {
        const categoryId = req.params.categoryid;
        const category = await Category.findById(categoryId);
        res.status(200).json(category);
    } catch (error) {
        console.error("Error fetching category:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});
//Get category by ID endpoint end
/**********************************************/
//Update category endpoint start

router.put("/", async (req, res) => {
    try {
        const updateCategoryInfo = req.body;
        const category = await Category.findById(updateCategoryInfo._id);
        if (!category) {
            return res.status(404).send({ error: "Category not found" });
        }
        const updatedCategory = await Category.findByIdAndUpdate(category._id, updateCategoryInfo);
        res.status(200).json(updatedCategory);
    } catch (error) {
        console.error("Error updating category:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});
//Update category endpoint end
/********************************/
//Delete category endpoint start

router.delete("/", async (req, res) => {
    try {
        const deleteCategoryInfo = req.body;
        const deletedCategory = await Category.findByIdAndDelete(deleteCategoryInfo._id);
        if (!deletedCategory) {
            return res.status(404).json({ error: "Category not found" });
        }
        res.status(200).json({ Message: "Category deleted successfully" });
    } catch (error) {
        console.error("Error deleting category:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});
//Delete category endpoint end

module.exports = router;