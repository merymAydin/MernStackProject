// Importing the mongoose package to interact with MongoDB
const mongoose = require("mongoose");

//creating category table 
const categorySchema = new mongoose.Schema(
    {
    name: { type: String, required: true},
    image : { type: String, required: true}
   },
   {
       timestamps: true
   }
)

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;