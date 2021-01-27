const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../db");

class Driver extends Model { };

Driver.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue('first_name', value.toUpperCase())
        }
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue('last_name', value.toUpperCase())
        }
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        },
        unique: true,
        allowNull: false,
        set(value) {
            this.setDataValue('email', value.toLowerCase())
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mobile: {
        type: DataTypes.TEXT, // Should be changed
        unique: true,
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM,
        values: ['MALE', 'FEMALE'],
        allowNull: false,
        set(value) {
            this.setDataValue('gender', value.toUpperCase())
        }
    }
}, {
    sequelize,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
        {
            unique: true,
            fields: ['email']
        },
        {
            fields: ['first_name','last_name']
        }
    ]
});

module.exports = Driver;