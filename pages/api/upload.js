//api/upload.js
import cloudinary from "cloudinary";
import { IncomingForm } from "formidable";
import mongoose from 'mongoose';

// mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

// const VideoSchema = new mongoose.Schema({
//   user: String,
//   dateUploaded: Date,
//   postId: String,
//   cloudinaryLink: String,
// });

// const Video = mongoose.model('Video', VideoSchema);

cloudinary.config({ 
  cloud_name: 'dmums7y1r', 
  api_key: '521739666628671', 
  api_secret: 'embVcy7IAuK89m95X09kVrWLWmQ' 
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default async (req, res) => {
  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });

  const file = data?.files?.inputFile.filepath;


  const date = new Date();
  let time = date.getTime();
  
  try {
    const response = await cloudinary.v2.uploader.upload(file, {
      resource_type: "video",
      public_id: time
    });

    const url = response.secure_url; 
    return res.json({url}); 
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ message: "Server error" });
  }
};