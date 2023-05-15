const Product = require("../models/ProductModel");
const Sequelize = require("../database/dbConfig");

const orderList = async (req, res) => {
    const { page, limit, search } = req.query;

    try {
        let data = await Product.findAndCountAll({
            offset: (page - 1) * limit,
            limit: limit,
            where: Sequelize.literal(
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
