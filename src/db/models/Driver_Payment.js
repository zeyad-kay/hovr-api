const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../db");
const {Driver} = require("./Driver");

class Driver_Payment extends Model { }

Driver_Payment.init({
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
    driver_id: {
        // type: DataTypes.UUID,
        type: DataTypes.INTEGER,
        references: {
            model: Driver,
            key: "id",
        },
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM,
        values: ["PENDING", "PAID"],
        defaultValue: "PENDING",
        set(value) {
            this.setDataValue("status", value.toUpperCase());
        }
    },
    method: {
        type: DataTypes.ENUM,
        values: ["FAWRY", "CARD", "CASH", "MOBILE"],
        set(value) {
            this.setDataValue("method", value.toUpperCase());
        }
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    bonus: {
        type: DataTypes.FLOAT,
        defaultValue: 0
    },
    receipt_picture: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isUrl: true
        }
    },
    paid_at: {
        type: DataTypes.DATE,
    }
}, {
    sequelize,
    createdAt: "created_at",
    updatedAt: "updated_at",
    indexes: [
        {
            fields: ["driver_id"]
        },
        {
            fields: ["status"]
        }
    ]
});

exports.Driver_Payment = Driver_Payment;