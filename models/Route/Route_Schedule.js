const { DataTypes, Model } = require('sequelize');
const { sequelize } = require("../../config/sequelize");
const Route = require('./Route');

class Route_Schedule extends Model { };

Route_Schedule.init({
    day: {
        type: DataTypes.ENUM,
        values: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
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
        allowNull: false
    },
    second_trip_time: {
        type: DataTypes.TIME,
        allowNull: false
    }
}, {
    sequelize,
});

module.exports = Route_Schedule;