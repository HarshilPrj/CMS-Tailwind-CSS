const { DataTypes } = require("sequelize");
const sequelize = require(".././database/dbConfig");
const UUId = require("uuid");

const UserRole = sequelize.define(
    "roles",
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        user_role: {
            type: DataTypes.CITEXT,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

sequelize.sync();

module.exports = UserRole;
