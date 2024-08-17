const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Post = require('./post');

const Like = sequelize.define('Like', {
    like_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'user_id',
        },
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Post,
            key: 'post_id',
        },
    },
});

User.belongsToMany(Post, { through: Like, foreignKey: 'user_id' });
Post.belongsToMany(User, { through: Like, foreignKey: 'post_id' });

module.exports = Like;
