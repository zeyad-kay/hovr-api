const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../db");
const { Driver } = require("./Driver");
class Pickup_Line extends Model { }

Pickup_Line.init({
    // id: {
    //     type: DataTypes.UUID,
    //     defaultValue: DataTypes.UUIDV1,
    //     primaryKey: true
    // },
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
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
    day: {
        type: DataTypes.ENUM,
        values: [
            "FRIDAY",
            "SATURDAY",
            "SUNDAY",
            "MONDAY",
            "TUESDAY",
            "WEDNESDAY",
            "THURSDAY"
        ],
        allowNull: false,
        set(value) {
            this.setDataValue("day", value.toUpperCase());
        }
    },
    pickup_time: {
        type: DataTypes.TIME,
        allowNull: false
    },
}, {
    sequelize,
    createdAt: "created_at",
    updatedAt: "updated_at",
    indexes: [
        {
            fields: ["day"]
        },
        {
            fields: ["driver_id"]
        },
        {
            fields: ["driver_id", "day", "pickup_time"],
            unique: true
        }
    ]
});

exports.Pickup_Line = Pickup_Line;