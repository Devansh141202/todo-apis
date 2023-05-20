const {  login, register } = require("../controllers/userController");

const router = require("express").Router();

router.post("/create", register);
router.get("/login", login);

module.exports = router