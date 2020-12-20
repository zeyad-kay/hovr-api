const { DataTypes, Model } = require('sequelize');
const { sequelize } = require("../../config/sequelize");
const Child = require('./Child');

class Child_Schedule extends Model { };

Child_Schedule.init({
    day: {
        type: DataTypes.ENUM,
        values: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        allowNull: false,
        primaryKey: true
    },
    child_id: {
        type: DataTypes.UUID,
        references: {
            model: Child,
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

module.exports = Child_Schedule;