const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../../db");
const Route = require('./Route');

class Route_Schedule extends Model { };

Route_Schedule.init({
    day: {
        type: DataTypes.ENUM,
        values: ['Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        allowNull: false,
        primaryKey: true
    },
    route_id: {
        type: DataTypes.UUID,
        references: {
            model: Route,
            key: 'id',
        },
        primaryKey: true
    },
    first_trip_time: {
        type: DataTypes.TIME,
        // allowNull: false
    },
    second_trip_time: {
        type: DataTypes.TIME,
        // allowNull: false
    }
}, {
    sequelize,
    indexes: [
        {
            fields: ['day']
        }
    ]
});

module.exports = Route_Schedule;