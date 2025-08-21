const express = require("express");
const router = express.Router();
const Author = require("../models/Author");


//Create author endpoint start
router.post("/", async (req, res) => {
    try {
        const { firstname, lastname } = req.body;
        const newAuthor = new Author({ firstname, lastname });
        await newAuthor.save();
        res.status(201).json(newAuthor);
    } catch (error) {
        console.error("Error creating author:", error);
        res.status(500).send("Internal Server Error");
        
    }
});
//Create author endpoint end
/*************************** */
//Get authors endpoint start
router.get("/", async (req, res) => {
    try {
        const authorList = await Author.find();
        res.status(200).json(authorList);
    } catch (error) {
        console.error("Error fetching authors:", error);
        res.status(500).send("Internal Server Error");
    }
});
//Get authors endpoint end
/**********************************************/
//Get author by ID endpoint start
//localhost:5000/api/authors/125aewsrt
router.get("/:authorid", async (req, res) => {
    try {
        const authorId = req.params.authorid;
        const author = await Author.findById(authorId);
        res.status(200).json(author);
    } catch (error) {
        console.error("Error fetching author:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});
//Get author by ID endpoint end
/**********************************************/
//Update author endpoint start

router.put("/", async (req, res) => {
    try {
        const updateAuthorInfo = req.body;
        const author = await Author.findById(updateAuthorInfo._id);
        if (!author) {
            return res.status(404).send({ error: "Author not found" });
        }
        const updatedAuthor = await Author.findByIdAndUpdate(author._id, updateAuthorInfo);
        res.status(200).json(updatedAuthor);
    } catch (error) {
        console.error("Error updating author:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});
//Update author endpoint end
/********************************/
//Delete author endpoint start

router.delete("/", async (req, res) => {
    try {
        const deleteAuthorInfo = req.body;
        const deletedAuthor = await Author.findByIdAndDelete(deleteAuthorInfo._id);
        if (!deletedAuthor) {
            return res.status(404).json({ error: "Author not found" });
        }
        res.status(200).json({ Message: "Author deleted successfully" });
    } catch (error) {
        console.error("Error deleting author:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});
//Delete author endpoint end

module.exports = router;