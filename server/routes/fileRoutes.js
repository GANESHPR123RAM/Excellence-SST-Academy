const express = require('express');
const multer = require('multer');
const authMiddleware = require("../middleware/authmiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const {
  Topers,
  GetTopers,
  deleteTopers,
  TopersReview,
  GetTopersReview,
  deleteTopersReview,
  DemoLink,
  GetDemoLink,
  deleteDemoLink,
} = require('../controllers/fileController');

const router = express.Router();

// Configure Multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post('/Topers', authMiddleware, adminMiddleware, upload.single('file'), Topers);
router.get('/GetTopers', GetTopers);
router.route("/Topers/delete/:id").delete(authMiddleware, adminMiddleware, deleteTopers);

router.post('/TopersReview', authMiddleware, adminMiddleware, TopersReview);
router.get('/GetTopersReview', GetTopersReview);
router.route("/TopersReview/delete/:id").delete(authMiddleware, adminMiddleware, deleteTopersReview);


router.post('/DemoLink', authMiddleware, adminMiddleware, DemoLink);
router.get('/GetDemoLink', GetDemoLink);
router.route("/DemoLink/delete/:id").delete(authMiddleware, adminMiddleware, deleteDemoLink);

module.exports = router;
