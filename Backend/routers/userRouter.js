const express = require("express");
const router = express.Router();
const {
    getUsers,
    createUser,
    updateUser,
    loginUser,
    logoutUser,
} = require("../controller/userController");

router.post("/loginUser", loginUser);
router.get("/getUsers", getUsers);
router.post("/createUser", createUser);
router.put("/updateUser/:id", updateUser);
router.post("/logout", logoutUser);

module.exports = router;
