const { Like } = require('../models');

// Controller function to like a post
const likePost = async (req, res) => {
    const { userId, postId } = req.body;

    try {
        // Check if the like already exists
        const existingLike = await Like.findOne({ where: { user_id: userId, post_id: postId } });

        if (existingLike) {
            return res.status(400).json({ message: 'You have already liked this post' });
        }

        // Create a new like
        const like = await Like.create({
            user_id: userId,
            post_id: postId,
        });

        res.status(201).json({ message: 'Post liked successfully', like });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { likePost };
