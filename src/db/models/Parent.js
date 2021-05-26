const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../db");
const { capitalize } = require("../../utils");

class Parent extends Model { }

Parent.init({
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
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
        },
        unique: true,
        allowNull: false,
        set(value) {
            this.setDataValue("email", value.toLowerCase());
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mobile: {
        type: DataTypes.TEXT, // Should be changed
        unique: true,
        allowNull: false
    },
    profile_picture: {
        type: DataTypes.STRING,
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
            fields: ["email"]
        },
        {
            unique: true,
            fields: ["mobile"]
        },
        {
            unique: true,
            fields: ["first_name","last_name","mobile"]
        }
    ]
});

exports.Parent = Parent;