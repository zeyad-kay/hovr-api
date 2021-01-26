const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../../db");
const Child = require('./Child');

class Child_Address extends Model { };

Child_Address.init({
    child_id: {
        type: DataTypes.UUID,
        references: {
            model: Child,
            key: 'id'
        },
        primaryKey: true
    },
    home_address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    home_coordinates: {
        type: DataTypes.JSON,
        allowNull: false,
        get() {
            return JSON.parse(this.getDataValue('home_coordinates'))
        },
        set(value) {
            this.setDataValue('home_coordinates',JSON.stringify(value))
        }
    },
    school_address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    school_coordinates: {
        type: DataTypes.JSON,
        allowNull: false,
        get() {
            return JSON.parse(this.getDataValue('school_coordinates'))
        },
        set(value) {
            this.setDataValue('school_coordinates',JSON.stringify(value))
        }
    }
}, {
    sequelize
});

module.exports = Child_Address;