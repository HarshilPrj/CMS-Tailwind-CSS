const Product = require("../models/ProductModel");

const orderList = async (req, res) => {
    const { page, limit, search } = req.query;
    let data = [];

    try {
        if (search === 3 || search === "3") {
            data = await Product.findAndCountAll({
                offset: (page - 1) * limit,
                limit: limit,
            });
        } else {
            data = await Product.findAndCountAll({
                offset: (page - 1) * limit,
                limit: limit,
                where: { status: search },
            });
        }

        return res.status(200).send(data);
    } catch (error) {
        return res
            .status(404)
            .send({ stack: error.stack, message: error.message });
    }
};

module.exports = { orderList };
