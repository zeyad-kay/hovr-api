const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../db");
const { Driver } = require("./Driver");

class Car extends Model { }

Car.init({
    driver_id: {
        // type: DataTypes.UUID,
        type: DataTypes.INTEGER,
        references: {
            model: Driver,
            key: "id"
        },
        primaryKey: true
    },
    license_plate: {
        type: DataTypes.STRING,
        unique: true
    },
    model: {
        type: DataTypes.STRING,
        set(value) {
            this.setDataValue("model", value.toUpperCase());
        }
    },
    license_picture: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isUrl: true
        }
    },
}, {
    sequelize,
    createdAt: "created_at",
    updatedAt: "updated_at",
});

exports.Car = Car;