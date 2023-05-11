const { DataTypes } = require("sequelize");
const sequelize = require(".././database/dbConfig");

const UserRole = sequelize.define("roles", {
    user_role: {
        type: DataTypes.CITEXT,
        allowNull: false,
    },
});

const User = sequelize.define(
    "users",
    {
        first_name: {
            type: DataTypes.CITEXT,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.CITEXT,
            allowNull: false,
        },
        email: {
            type: DataTypes.CITEXT,
            allowNull: false,
            unique: true,
        },
        pass: {
            type: DataTypes.CITEXT,
            allowNull: false,

            validate: {
                is: {
                    args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
                    msg: "Passwords Must Be a Strong",
                },
            },
        },
        like: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    {
        timestamps: false,
    }
);

UserRole.hasOne(User, { foreignKey: "role_id" });
User.belongsTo(UserRole, { foreignKey: "role_id" });

module.exports = User;
