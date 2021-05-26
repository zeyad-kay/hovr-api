const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../db");
const {Parent} = require("./Parent");
const { capitalize } = require("../../utils");

class Child extends Model { }

Child.init({
    // id: {
    //     type: DataTypes.UUID,
    //     defaultValue: DataTypes.UUIDV1,
    //     primaryKey: true
    // },
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    parent_id: {
        // type: DataTypes.UUID,
        type: DataTypes.INTEGER,
        references: {
            model: Parent,
            key: "id",
        },
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue("first_name", capitalize(value));
        }
    },
    // age: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // },
    // date_of_birth: {
    //     type: DataTypes.DATEONLY,
    //     allowNull: false
    // },
}, {
    sequelize,
    createdAt: "created_at",
    updatedAt: "updated_at",
    indexes: [
        {
            fields: ["parent_id"]
        }
    ]
});

exports.Child = Child;