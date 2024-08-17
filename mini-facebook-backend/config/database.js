const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mini_facebook', 'postgres', 'Pa$$w0rd', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;
