const express = require('express');
const mongodb = require('mongodb');
const Posts = require('../../../db/models/post'); 
const router = express.Router();

// Get Posts 
router.get('/', async (req,res) => {
    res.send(await Posts.find({}));
})

// Add Post
router.post('/', async (req, res) => {
    const { text } = req.body;
    let post = new Posts({ text, createdAt: new Date() });
    try {
        await post.save();
        res.status(201).send("Post added");
    } catch (error) {
        res.status(500).send("Server error");
    }
})

// Delete Post
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Posts.deleteOne({_id: id});
    res.status(200).send("Post deleted succesfully");
})

module.exports = router;