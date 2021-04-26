module.exports = fileUploads = (req, res) => {
    // req.file for single file upload
  // req.files form array of files
  res.status(200).json({ file: req.files, body: req.body });
  // .
  // .
  // .
  // now you use req.files to  save files name or path to database
}