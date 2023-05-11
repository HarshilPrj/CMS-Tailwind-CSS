const { DataTypes } = require("sequelize");
const sequelize = require(".././database/dbConfig");

const UserRole = sequelize.define(
    "roles",
    {
        user_role: {
            type: DataTypes.CITEXT,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = UserRole;
