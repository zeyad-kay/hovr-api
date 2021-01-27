const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../db");
const Child = require('./Child');
const Route = require('./Route');

class Child_Schedule extends Model { };

Child_Schedule.init({
    child_id: {
        type: DataTypes.UUID,
        references: {
            model: Child,
            key: 'id',
        },
        allowNull: false
    },
    route_id: {
        type: DataTypes.UUID,
        references: {
            model: Route,
            key: 'id',
        },
    },
    day: {
        type: DataTypes.ENUM,
        values: [
            'FRIDAY',
            'SATURDAY',
            'SUNDAY',
            'MONDAY',
            'TUESDAY',
            'WEDNESDAY',
            'THURSDAY'
        ],
        allowNull: false,
        set(value) {
            this.setDataValue('gender', value.toUpperCase())
        }
    },
    pickup_time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    pickup_place_id: {
        type: DataTypes.STRING
    },
    pickup_coordinates: {
        type: DataTypes.JSON,
        allowNull: false,
        get() {
            return JSON.parse(this.getDataValue('pickup_coordinates'))
        },
        set(value) {
            this.setDataValue('pickup_coordinates', JSON.stringify(value))
        }
    },
    destination_place_id: {
        type: DataTypes.STRING
    },
    destination_coordinates: {
        type: DataTypes.JSON,
        allowNull: false,
        get() {
            return JSON.parse(this.getDataValue('destination_coordinates'))
        },
        set(value) {
            this.setDataValue('destination_coordinates', JSON.stringify(value))
        }
    },
}, {
    sequelize,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
        {
            fields: ['day']
        },
        {
            fields: ['child_id']
        },
        {
            fields: ['route_id']
        }
    ]
});

module.exports = Child_Schedule;