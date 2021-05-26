const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../db");
const { Driver } = require("./Driver");
const { Pickup_Line } = require("./Pickup_Line");

class Cancelled_Trip extends Model { }

Cancelled_Trip.init({
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
    pickup_line_id: {
        // type: DataTypes.UUID,
        type: DataTypes.INTEGER,
        references: {
            model: Pickup_Line,
            key: "id",
        },
    },
    driver_id: {
        // type: DataTypes.UUID,
        type: DataTypes.INTEGER,
        references: {
            model: Driver,
            key: "id",
        },
        allowNull: false
    }
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

exports.Cancelled_Trip = Cancelled_Trip;