const Product = require("../models/ProductModel");
const sequelize = require("../database/dbConfig");
const { Op } = require("sequelize");

const orderList = async (req, res) => {
    const { page, limit, search } = req.query;

    try {
        let data = await Product.findAndCountAll({
            offset: (page - 1) * limit,
            limit: limit,
            where: sequelize.literal(
                `status ${search === "3" ? "!=" : "="} ${search}`
            ),
        });

        return res.status(200).send(data);
    } catch (error) {
        return res
            .status(404)
            .send({ stack: error.stack, message: error.message });
    }
};

module.exports = { orderList };
