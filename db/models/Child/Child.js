const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../../db");
const Parent = require('../Parent/Parent');
const Route = require('../Route/Route');

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
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM,
        values: ['male', 'female'],
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    route_id: {
        type: DataTypes.UUID,
        references: {
            model: Route,
            key: 'id',
        },
        unique: true
    },
}, {
    sequelize,
})

module.exports = Child;