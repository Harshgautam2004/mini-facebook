const sequelize = require('../config/database');
const User = require('./user'); // Make sure this is importing the User model
const Post = require('./post');
const Like = require('./like');
const Comment = require('./comment'); 

sequelize.sync({}) // force: true drops the table if it exists, useful during development
    .then(() => {
        console.log("Database & tables created!");
    })
    .catch(err => {
        console.error('Unable to create tables:', err);
    });

module.exports = { User,  Post, Like, Comment};
