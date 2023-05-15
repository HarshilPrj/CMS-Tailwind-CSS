require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
const UserRole = require("../models/RoleModel");
const { Op } = require("sequelize");
const sequelize = require("../database/dbConfig");

const getUsers = async (req, res) => {
    const { page, limit, search } = req.query;

    try {
        if (!req.cookies.UserToken) {
            return res.status(400).send({ error: "Login Required" });
        }
        let sessionId = jwt.verify(
            req.cookies.UserToken,
            process.env.JWT_SECKETY
        );

        const user = await User.findOne({
            where: {
                [Op.and]: [{ id: sessionId.payload }, { is_enable: true }],
            },
        });

        if (!user) {
            return res.status(400).send({ error: "Login Required" });
        } else {
            let data = await User.findAll({
                attributes: { exclude: ["pass"] },
                include: [
                    {
                        model: UserRole,
                        attributes: ["user_role", ["id", "RoleID"]],
                    },
                ],
                order: ["created_on"],
                offset: (page - 1) * limit,
                limit: limit,
                where: {
                    [Op.or]: [
                        sequelize.where(sequelize.col("first_name")),
                        {
                            first_name: {
                                [Op.like]: `%${search}%`,
                            },
                        },
                    ],
                },
            });
            return res.status(200).send(data);
        }
    } catch (error) {
        return res
            .status(404)
            .send({ stack: error.stack, message: error.message });
    }
};

const createUser = async (req, res) => {
    try {
        let checkEmail = await User.findAll({
            where: { email: req.body.email },
        });

        if (checkEmail.length > 0) {
            return res.status(401).send({ message: "Email already Exists" });
        }

        let userRole = await UserRole.findOne({
            where: { user_role: req.body.role },
        });

        req.body["role_id"] = userRole.id;

        let addUserData = await User.create(req.body);
        if (addUserData) {
            return res.status(200).send({ message: "Add User Successfully" });
        }
    } catch (error) {
        return res
            .status(404)
            .send({ stack: error.stack, message: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        let updateUserData = await User.update(req.body, {
            where: {
                [Op.and]: [{ id: req.params.id }, { is_enable: true }],
            },
        });
        console.log(updateUserData);

        if (updateUserData[0] !== 0) {
            return res
                .status(200)
                .send({ message: "Update User Successfully" });
        } else {
            return res.status(401).send({ message: "User Not Found" });
        }
    } catch (error) {
        return res
            .status(404)
            .send({ stack: error.stack, message: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        let loginUser = await User.findOne({
            where: {
                [Op.and]: [
                    { email: req.body.email },
                    { pass: req.body.password },
                    { is_enable: true },
                ],
            },
            include: {
                model: UserRole,
            },
        });

        if (loginUser) {
            let payload = loginUser.id;
            let token = jwt.sign({ payload }, process.env.JWT_SECKETY, {
                expiresIn: 60 * 60,
            });
            res.cookie("UserToken", token, { maxAge: 900000, httpOnly: true });

            return res
                .status(200)
                .send({ loginUser, token, msg: "Login Successfully" });
        } else {
            return res.status(401).send({ message: "User Not Found" });
        }
    } catch (error) {
        return res
            .status(404)
            .send({ stack: error.stack, message: error.message });
    }
};

const logoutUser = (req, res) => {
    try {
        if (req.cookies.UserToken) {
            res.clearCookie("UserToken");
            return res.status(200).send({ msg: "Logout Successfully" });
        } else {
            return res.status(400).send({ error: "Login Required" });
        }
    } catch (error) {
        return res
            .status(404)
            .send({ stack: error.stack, message: error.message });
    }
};

module.exports = { getUsers, createUser, updateUser, loginUser, logoutUser };
