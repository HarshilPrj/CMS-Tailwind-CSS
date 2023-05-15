const { DataTypes } = require("sequelize");
const sequelize = require(".././database/dbConfig");
const UUID = require("uuid");

const Product = sequelize.define(
    "products",
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: UUID.v4(),
        },
        product_name: {
            type: DataTypes.CITEXT,
            allowNull: false,
        },
        address: {
            type: DataTypes.CITEXT,
            allowNull: false,
        },
        order_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        price: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

sequelize.sync();

module.exports = Product;
