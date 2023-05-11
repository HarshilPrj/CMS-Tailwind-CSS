const express = require("express");
const router = express.Router();
const { orderList } = require("../controller/orderListController");

router.get("/orders", orderList);

module.exports = router;
