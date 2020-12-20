const { DataTypes, Model } = require('sequelize');
const { sequelize } = require("../../config/sequelize");
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
    // home_coordinates: {
    //     type: DataTypes.,
    //     allowNull: false,
    // },
    school_address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // school_coordinates: {
    //     type: DataTypes.,
    //     allowNull: false,
    // }
}, {
    sequelize
});

module.exports = Child_Address;