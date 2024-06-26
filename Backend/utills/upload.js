
const dotenv = require("dotenv");
const multer = require("multer");
const path = require('path');

dotenv.config();


// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, '/tmp');  // Use the writable /tmp directory
  },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });
  
  const upload = multer({ storage: storage });



module.exports = upload;
