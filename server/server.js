const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const commentRoute = require('./routes/comments');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
dotenv.config();
// const allowedOrigins = ['http://localhost:3000'];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
// };
app.use(cors());

app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '/images')));

const Connection = async () => {
  const URL =
    'mongodb+srv://Anhsangprovl:Anhsang123456@cluster0.p0gr4dt.mongodb.net/FPTBlog';
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log('Database connected successfully');
  } catch (error) {
    console.log('Error while connecting to the database ', error);
  }
};
Connection();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post('/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded');
});

app.use('/auth', authRoute);
app.use('/users', userRoute);
app.use('/posts', postRoute);
app.use('/categories', categoryRoute);
app.use('/comments', commentRoute);

app.listen('5000', () => {
  console.log('Backend is running.');
});
