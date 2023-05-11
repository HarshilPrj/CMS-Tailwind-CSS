const { DataTypes } = require("sequelize");
const sequelize = require(".././database/dbConfig");

const Product = sequelize.define(
    "products",
    {
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

module.exports = Product;
