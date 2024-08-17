const { User } = require('../models');

// Controller function to add a friend
const addFriend = async (req, res) => {
    const { userId, friendId } = req.body;

    try {
        const user = await User.findByPk(userId);
        const friend = await User.findByPk(friendId);

        if (!user || !friend) {
            return res.status(404).json({ message: 'User or Friend not found' });
        }

        await user.addFriend(friend);

        res.status(200).json({ message: 'Friend added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { addFriend };
