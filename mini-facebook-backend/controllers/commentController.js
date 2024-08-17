const { Comment } = require('../models');

// Controller function to comment on a post
const commentOnPost = async (req, res) => {
    const { userId, postId, content } = req.body;

    try {
        const comment = await Comment.create({
            user_id: userId,
            post_id: postId,
            content,
        });

        res.status(201).json({ message: 'Comment added successfully', comment });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { commentOnPost };
