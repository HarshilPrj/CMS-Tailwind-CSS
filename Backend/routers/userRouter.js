const express = require("express");
const router = express.Router();
// const authToken = require("../middleware/authtoken");
const {
    getUsers,
    createUser,
    updateUser,
    loginUser,
} = require("../controller/userController");

router.post("/loginUser", loginUser);
// router.use(authToken);

router.get("/getUsers", getUsers);
router.post("/createUser", createUser);
router.put("/updateUser/:id", updateUser);

module.exports = router;
