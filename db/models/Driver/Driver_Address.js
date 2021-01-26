const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../../db");
const Driver = require('./Driver');

class Driver_Address extends Model { };

Driver_Address.init({
    driver_id: {
        type: DataTypes.UUID,
        references: {
            model: Driver,
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
    }
}, {
    sequelize
});

module.exports = Driver_Address;