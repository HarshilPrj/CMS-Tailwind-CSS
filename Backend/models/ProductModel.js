const { DataTypes } = require("sequelize");
const Sequelize = require(".././database/dbConfig");
const db = {};

const Product = Sequelize.define(
    "products",
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
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
            type: DataTypes.INTEGER,
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

db.Sequelize = Sequelize;

db.Sequelize.sync();
module.exports = Product;
