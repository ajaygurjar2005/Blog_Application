const mongoose = require("mongoose")
const Image = require("../Model/image.js")
const path = require("path")


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const uploadImage = async (req, res) => {
    const { filename, originalname, path } = req.file;
  
    try {
      const newImage = new Image({
        filename,
        originalname,
        path,
      });
  
      console.log("just check")
  
      const savedImage = await newImage.save();
      
      const imageUrl = `http://localhost:8000/uploads/${filename}`;
      res.status(201).json({ message: 'Image uploaded successfully', imageUrl });
    } catch (err) {
      res.status(500).json({ error: err.message , });
    }
  };


const getImage = async (req, res) => {
    try {
      const filename = req.params.filename;
      const image = await Image.findOne({ filename });
  
      if (!image) {
        return res.status(404).json({ error: 'Image not found' });
      }
      
      const imagePath = path.join(__dirname, '..', 'uploads', filename);
      
      res.setHeader('Content-Type', 'image/jpeg');
  
      res.sendFile(imagePath);
      
    } catch (error) {
      console.error('Error fetching image:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };



module.exports = {getImage,uploadImage};