require('./models'); // Ensure this line is added to import the index.js file
const express = require('express');
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');
const friendRoutes = require('./routes/friends');
const postRoutes = require('./routes/posts');
const likeRoutes = require('./routes/likes');
const commentRoutes = require('./routes/comments');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/friends', friendRoutes);
app.use('/posts', postRoutes);
app.use('/likes', likeRoutes);
app.use('/comments', commentRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to Mini Facebook!');
});

sequelize.authenticate()
    .then(() => {
        console.log('Database connected...');
    })
    .catch(err => {
        console.log('Error: ' + err);
    });

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
