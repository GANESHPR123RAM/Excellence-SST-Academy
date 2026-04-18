const express = require('express');
const router = express.Router();
const authMiddleware = require("../middleware/authmiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const { contactForm, getContact } = require("../controllers/contactController");

router.route("/contact").post(contactForm);
router.route("/Allcontact").get(authMiddleware,adminMiddleware, getContact);

module.exports = router;