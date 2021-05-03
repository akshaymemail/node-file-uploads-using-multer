# node-file-uploads-using-multer
a  node.js file upload template using multer

You can change '.jpg ' extension with your file extension that you want to upload (eg. .mp3, .pdf ...)

`var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload_files/");
  },
  filename: function (req, file, cb) {
    cb(null, _.kebabCase(req.body.name) + "-" + nanoid() + '.jpg');
  },
});`
