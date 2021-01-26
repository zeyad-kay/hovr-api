const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../../db");
const Driver = require('../Driver/Driver');
class Route extends Model { };

Route.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
    },
    driver_id: {
        type: DataTypes.UUID,
        references: {
            model: Driver,
            key: 'id',
        },
    }
}, {
    sequelize
});

module.exports = Route;