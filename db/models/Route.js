const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../db");
const Driver = require('./Driver');
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
    sequelize,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
        {
            fields: ['driver_id']
        }
    ]
});

module.exports = Route;