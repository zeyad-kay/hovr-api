const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../db");
const {Schedule} = require("./Schedule");
const {Trip} = require("./Trip");

class Schedule_Trip extends Model { }

Schedule_Trip.init({
    trip_id: {
        // type: DataTypes.UUID,
        type: DataTypes.INTEGER,
        references: {
            model: Trip,
            key: "id",
        },
        allowNull: false
    },
    schedule_id: {
        // type: DataTypes.UUID,
        type: DataTypes.INTEGER,
        references: {
            model: Schedule,
            key: "id",
        },
        allowNull: false
    },
}, {
    sequelize,
    createdAt: "created_at",
    updatedAt: "updated_at",
    indexes: [
        {
            fields: ["schedule_id"]
        },
        {
            fields: ["trip_id"]
        }
    ]
});

exports.Schedule_Trip = Schedule_Trip;