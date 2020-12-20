const { DataTypes, Model } = require('sequelize');
const { sequelize } = require("../../config/sequelize");

class Driver extends Model { };

Driver.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
    },
    full_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mobile: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM,
        values: ['Male', 'Female'],
        allowNull: false
    }
}, {
    sequelize,
});

module.exports = Driver;