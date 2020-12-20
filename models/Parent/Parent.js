const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../config/sequelize");

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
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mobile: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM,
        values: ['Male','Female'],
        allowNull: false
    }
}, {
    sequelize,
});

module.exports = Parent;