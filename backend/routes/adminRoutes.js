const router = require("express").Router();
const auth = require("../middleWares/checkAuth");
const adminController = require("../controllers/adminController");

router.post("/admin", auth, adminController.changeStatus);

module.exports = router;
