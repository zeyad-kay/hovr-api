const { DataTypes, Model } = require('sequelize');
const { sequelize } = require("../../config/sequelize");
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
    // home_coordinates: {
    //     type: DataTypes.,
    //     allowNull: false,
    // }
}, {
    sequelize
});

module.exports = Driver_Address;