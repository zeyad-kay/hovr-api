const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../../db");
const bcrypt = require('bcrypt');

class Parent extends Model { };

Parent.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
    },
    full_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
        },
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mobile: {
        type: DataTypes.TEXT, // Should be changed
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM,
        values: ['male', 'female'],
        allowNull: false
    }
}, {
    sequelize,
    indexes: [
        {
            fields: ['email']
        }
    ]
});

module.exports = Parent;