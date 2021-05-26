const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../db");
const { capitalize } = require("../../utils");

class Driver extends Model { }

Driver.init({
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
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue("first_name", capitalize(value));
        }
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue("last_name", capitalize(value));
        }
    },
    mobile: {
        type: DataTypes.TEXT, // Should be changed
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    profile_picture: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isUrl: true
        }
    },
    national_id_picture: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isUrl: true
        }
    },
    driving_license_picture: {
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
    indexes: [
        {
            unique: true,
            fields: ["mobile"]
        },
        {
            unique: true,
            fields: ["first_name", "last_name", "mobile"]
        }
    ]
});

exports.Driver = Driver;