import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import IconButton from '@mui/material/IconButton';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import TextField from '@mui/material/TextField';
import { Box, Button, Grid } from '@mui/material';
const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('http://localhost:5000/categories');
      setCats(res.data);
    };
    getCats();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;
      try {
        await axios.post('http://localhost:5000/upload', data);
      } catch (err) {}
    }
    try {
      const res = await axios.post('http://localhost:5000/posts', newPost);
      window.location.replace('http://localhost:3000/post/' + res.data._id);
    } catch (err) {}
  };
  return (
    <div
      style={{
        marginTop: '30px',
        padding: '10px',
        backgroundColor: '#D2E9E9',
      }}>
      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt=""
          width={800}
          height={300}
          style={{ objectFit: 'cover' }}
        />
      )}
      <form onSubmit={handleSubmit}>
        <Box sx={{}}>
          <Box>
            <label htmlFor="fileInput">
              {/* <IconButton aria-label="delete" color="primary"> */}
              <FileUploadIcon color="primary" size="large" />
              {/* </IconButton> */}
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: 'none' }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <TextField
              id="outlined-controlled"
              label="Title"
              autoFocus={true}
              fullWidth
              onChange={(e) => setTitle(e.target.value)}
            />
          </Box>

          <Box style={{ width: '100%', height: '600px' }}>
            <ReactQuill
              className="editor"
              theme="snow"
              value={desc}
              onChange={setDesc}
            />
          </Box>

          <Button type="submit" variant="outlined">
            Publish
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default CreateBlog;
