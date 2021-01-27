const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../db");
const Parent = require("./Parent")

class Parent_Payment extends Model { }

Parent_Payment.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
    },
    parent_id: {
        type: DataTypes.UUID,
        references: {
            model: Parent,
            key: 'id',
        },
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM,
        values: ['PENDING', 'PAID'],
        defaultValue: 'PENDING',
        set(value) {
            this.setDataValue('status', value.toUpperCase())
        }
    },
    method: {
        type: DataTypes.ENUM,
        values: ['FAWRY', 'CARD', 'CASH', 'MOBILE'],
        set(value) {
            this.setDataValue('method', value.toUpperCase())
        }
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    discount: {
        type: DataTypes.FLOAT,
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

module.exports = Parent_Payment;