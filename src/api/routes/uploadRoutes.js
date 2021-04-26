const express = require("express");
const multer = require("multer");
const {nanoid}  = require("nanoid")
const _  = require('lodash')
const fileUploads = require('../controllers/uploadControllers')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload_files/");
  },
  filename: function (req, file, cb) {
    cb(null, _.kebabCase(req.body.name) + "-" + nanoid() + '.jpg');
  },
});

const Upload = multer({ storage: storage });

const uploadRoutes = express.Router();

// you can change Upload.signle to Upload.array to upload multiple files at once
uploadRoutes.post("/", Upload.array("image"), fileUploads );

module.exports = uploadRoutes;
