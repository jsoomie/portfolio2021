const router = require("express").Router();
const home = require("./router");

router.use("/", home);

module.exports = router;
