const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../db");
const {Child} = require("./Child");
const Pickup_Line = require("./Pickup_Line");

class Schedule extends Model { }

Schedule.init({
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
    child_id: {
        // type: DataTypes.UUID,
        type: DataTypes.INTEGER,
        references: {
            model: Child,
            key: "id",
        },
        allowNull: false
    },
    pickup_line_id: {
        // type: DataTypes.UUID,
        type: DataTypes.INTEGER,
        references: {
            model: Pickup_Line,
            key: "id",
        },
        defaultValue: null
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
    pickup_place_id: {
        type: DataTypes.STRING
    },
    pickup_coordinates: {
        type: DataTypes.GEOGRAPHY,
        allowNull: false,
        get() {
            return {
                lon: this.getDataValue("pickup_coordinates").coordinates[0],
                lat: this.getDataValue("pickup_coordinates").coordinates[1]
            };
        },
        set(value) {
            this.setDataValue("pickup_coordinates", { type: "Point", coordinates: [value.lon,value.lat]});
        }
    },
    destination_place_id: {
        type: DataTypes.STRING
    },
    destination_coordinates: {
        type: DataTypes.GEOGRAPHY,
        allowNull: false,
        get() {
            return {
                lon: this.getDataValue("destination_coordinates").coordinates[0],
                lat: this.getDataValue("destination_coordinates").coordinates[1]
            };
        },
        set(value) {
            this.setDataValue("destination_coordinates", { type: "Point", coordinates: [value.lon,value.lat]});
        }
    },
}, {
    sequelize,
    createdAt: "created_at",
    updatedAt: "updated_at",
    indexes: [
        {
            fields: ["child_id", "day", "pickup_time"],
            unique: true
        },
        {
            fields: ["day"],
        },
        {
            fields: ["child_id"]
        },
        {
            fields: ["pickup_line_id"]
        }
    ]
});

exports.Schedule = Schedule;