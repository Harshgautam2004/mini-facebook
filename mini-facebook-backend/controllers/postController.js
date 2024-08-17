const { Post } = require('../models');

// Controller function to create a post
const createPost = async (req, res) => {
    const { userId, content } = req.body;

    try {
        const post = await Post.create({
            user_id: userId,
            content
        });

        res.status(201).json({ message: 'Post created successfully', post });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { createPost };
