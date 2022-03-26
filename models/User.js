const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class User extends Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
      password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      len: [8],
      }
    },
  },
  
    {
      sequelize,
      timestamp: false,
      modelName: 'User',
    }
  
);

module.exports = User;

// Hashing functions area 1 way street
// 'sdfasdfdasgdfg' => 'asdfasddddddfasdfasdf'