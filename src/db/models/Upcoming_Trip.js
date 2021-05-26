const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../db");
const {Driver} = require("./Driver");
const {Pickup_Line} = require("./Pickup_Line");

class Upcoming_Trip extends Model { }

Upcoming_Trip.init({
    pickup_line_id: {
        // type: DataTypes.UUID,
        type: DataTypes.INTEGER,
        references: {
            model: Pickup_Line,
            key: "id",
        },
        primaryKey: true
    },
    driver_id: {
        // type: DataTypes.UUID,
        type: DataTypes.INTEGER,
        references: {
            model: Driver,
            key: "id",
        },
    },
    status: {
        type: DataTypes.ENUM,
        values: ["UPCOMING", "ONGOING"],
        defaultValue: "UPCOMING",
        set(value) {
            this.setDataValue("status", value.toUpperCase());
        }
    },
}, {
    sequelize,
    createdAt: "created_at",
    updatedAt: "updated_at",
    indexes: [
        {
            fields: ["pickup_line_id"]
        },
        {
            fields: ["driver_id"]
        }
    ]
});

exports.Upcoming_Trip = Upcoming_Trip;