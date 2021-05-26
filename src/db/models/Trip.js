const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../db");
const {Driver} = require("./Driver");

class Trip extends Model { }

Trip.init({
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
        allowNull:false
    },
    route: {
        type: DataTypes.GEOGRAPHY,
        allowNull: false
    }
}, {
    sequelize,
    createdAt: "created_at",
    updatedAt: "updated_at",
    indexes: [
        {
            fields: ["driver_id"]
        }
    ]
});

exports.Trip = Trip;