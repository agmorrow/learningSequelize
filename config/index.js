const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    // Name of database we want to connect to
    process.env.DB_NAME,
    // 'library_db',
    // Which user do we want to connect as
    process.env.DB_USER,
    // 'root',
    // What is the password od hte user that we want to connect as
    process.env.DB_PASSWORD,
    // 'password',
    // configuration object for the database we want to connect to
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    }
);

module.exports = sequelize;