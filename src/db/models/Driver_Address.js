const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../db");
const {Driver} = require("./Driver");

class Driver_Address extends Model { }

Driver_Address.init({
    driver_id: {
        // type: DataTypes.UUID,
        type: DataTypes.INTEGER,
        references: {
            model: Driver,
            key: "id"
        },
        primaryKey: true
    },
    home_place_id: {
        type: DataTypes.STRING,
    },
    home_coordinates: {
        type: DataTypes.GEOGRAPHY,
        allowNull: false,
        get() {
            return {
                lon: this.getDataValue("home_coordinates").coordinates[0],
                lat: this.getDataValue("home_coordinates").coordinates[1]
            };
        },
        set(value) {
            this.setDataValue("home_coordinates", { type: "Point", coordinates: [value.lon,value.lat]});
        }
    }
}, {
    sequelize,
    createdAt: "created_at",
    updatedAt: "updated_at",
});

exports.Driver_Address = Driver_Address;