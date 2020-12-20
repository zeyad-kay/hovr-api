const { DataTypes, Model } = require('sequelize');
const { sequelize } = require("../../config/sequelize");
const Driver = require('../Driver/Driver');
class Route extends Model { };

Route.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
        autoIncrement: true
    },
    driver_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Driver,
            key: 'id',
        },
        allowNull: false
    }
}, {
    sequelize
});

module.exports = Route;