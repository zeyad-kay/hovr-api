const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../db");
const Driver = require("./Driver")

class Driver_Payment extends Model { }

Driver_Payment.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
    },
    driver_id: {
        type: DataTypes.UUID,
        references: {
            model: Driver,
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
    bonus: {
        type: DataTypes.FLOAT,
    },
}, {
    sequelize,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
        {
            fields: ['driver_id']
        }
    ]
})

module.exports = Driver_Payment;