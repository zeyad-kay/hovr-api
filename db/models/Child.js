const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../db");
const Parent = require('./Parent');

class Child extends Model { };

Child.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
    },
    parent_id: {
        type: DataTypes.UUID,
        references: {
            model: Parent,
            key: 'id',
        },
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue('first_name', value.toUpperCase())
        }
    },
    gender: {
        type: DataTypes.ENUM,
        values: ['MALE', 'FEMALE'],
        allowNull: false,
        set(value) {
            this.setDataValue('gender', value.toUpperCase())
        }
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
        {
            fields: ['parent_id']
        }
    ]
})

module.exports = Child;