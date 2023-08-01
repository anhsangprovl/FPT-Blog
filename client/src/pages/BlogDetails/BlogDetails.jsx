import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReviewsIcon from '@mui/icons-material/Reviews';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import ShareIcon from '@mui/icons-material/Share';

import Textarea from '@mui/joy/Textarea';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';

import bg1 from '../../images/bg1.jpg';
import cardImg1 from '../../images/cardImg1.jpg';

import DOMPurify from 'dompurify';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
const BlogDetails = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  const PF = 'http://localhost:5000/images/';
  const { user } = useContext(Context);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent;
  };
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('http://localhost:5000/posts/' + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace('/');
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {}
  };

  return (
    <Box sx={{ padding: '20px', marginTop: '30px' }}>
      <Box sx={{}}>
        <Button
          sx={{
            boderRadius: '100',
            color: '#DA7F8F',
            backgroundColor: '#FFE3E3',
            fontSize: '12px',
            fontWeight: '700',
            marginBottom: '20px',
            borderRadius: 10,
            padding: '5px 10px',
            '&:hover': {
              backgroundColor: 'pink',
              borderRadius: 10,
            },
          }}>
          Jewelry
        </Button>
        <Grid container spacing={8}>
          <Grid item xs={10}>
            {!updateMode ? (
              <Typography
                variant="h3"
                sx={{ fontWeight: '700', marginBottom: '15px' }}>
                {title}
              </Typography>
            ) : (
              <TextField
                sx={{ marginBottom: '10px' }}
                id="outlined-basic"
                label="Title"
                variant="outlined"
                value={title}
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
              />
            )}
          </Grid>
          <Grid item xs={2}>
            <h1>
              {post.username === user?.username && (
                <div>
                  <IconButton
                    onClick={() => setUpdateMode(true)}
                    aria-label="delete"
                    color="primary">
                    <ModeEditIcon />
                  </IconButton>

                  <IconButton
                    onClick={handleDelete}
                    aria-label="delete"
                    color="primary">
                    <DeleteIcon />
                  </IconButton>

                  {/* <i
                      className="singlePostIcon far fa-edit"
                      onClick={() => setUpdateMode(true)}></i>
                    <i
                      className="singlePostIcon far fa-trash-alt"
                      onClick={handleDelete}></i> */}
                </div>
              )}
            </h1>
          </Grid>
        </Grid>
      </Box>

      <Divider />

      <Box sx={{ flexGrow: 1, marginTop: '20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Grid container spacing={2}>
              <Grid item xs={1}>
                <Avatar
                  sx={{
                    width: 46,
                    height: 46,
                    backgroundColor: 'orange',
                  }}></Avatar>
              </Grid>
              <Grid item xs={11}>
                <Grid container direction="column">
                  <Grid item>
                    <Typography
                      variant="h6"
                      sx={{ fontSize: '16px', fontWeight: '700' }}>
                      {post.username}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      sx={{ fontSize: '12px', color: 'gray' }}>
                      {new Date(post.createdAt).toDateString()}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Button
                  color="inherit"
                  sx={{
                    borderRadius: 10,
                    padding: '5px 20px',
                    marginTop: '5px',
                    '&:hover': {
                      backgroundColor: 'pink',
                      borderRadius: 10,
                    },
                  }}
                  startIcon={<FavoriteBorderIcon />}>
                  50
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  color="inherit"
                  sx={{
                    borderRadius: 10,
                    padding: '5px 20px',
                    marginTop: '5px',
                    '&:hover': {
                      backgroundColor: 'pink',
                      borderRadius: 10,
                    },
                  }}
                  startIcon={<ReviewsIcon />}>
                  100
                </Button>
              </Grid>
              <Grid item xs={3}>
                <IconButton aria-label="delete">
                  <TurnedInNotIcon />
                </IconButton>
                {/* <Button
                  color="inherit"
                  sx={{
                    borderRadius: 10,
                    padding: '5px 20px',
                    '&:hover': {
                      backgroundColor: 'pink',
                      borderRadius: 10,
                    },
                  }}
                  startIcon={<FavoriteBorderIcon />}>
                  50
                </Button> */}
              </Grid>
              <Grid item xs={3}>
                <IconButton aria-label="delete">
                  <ShareIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, marginTop: '20px', borderRadius: '50px' }}>
        {post.photo && (
          <img
            alt="background"
            src={PF + post.photo}
            width="100%"
            height="50%"
          />
        )}
      </Box>

      <Box sx={{ flexGrow: 1, marginTop: '40px' }}>
        {updateMode ? (
          <Textarea
            placeholder="Add to discussion"
            required
            minRows={10}
            value={desc}
            sx={{ mb: 1 }}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <Typography
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post.desc),
            }}></Typography>
        )}
        {updateMode && (
          <Button variant="outlined" color="primary" onClick={handleUpdate}>
            Update
          </Button>
        )}
        <Divider sx={{ marginTop: '40px' }} />
      </Box>

      <Box sx={{ flexGrow: 1, marginTop: '40px' }}>
        <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: '20px' }}>
          Comments (10)
        </Typography>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}>
          <Textarea
            placeholder="Add to discussion"
            required
            minRows={4}
            sx={{ mb: 1 }}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ borderRadius: 10, marginTop: '10px' }}>
            Submit
          </Button>
        </form>
      </Box>

      <Box sx={{ flexGrow: 1, marginTop: '40px' }}>
        <Box sx={{ marginBottom: '20px' }}>
          <Grid container>
            <Grid item xs={0.8} sx={{ marginTop: '10px' }}>
              <Avatar sx={{ bgColor: 'green' }}>S</Avatar>
            </Grid>
            <Grid item xs={11.2}>
              <Box
                sx={{
                  backgroundColor: '#f5f5f5',
                  border: '5px solid',
                  borderColor: '#f5f5f5',
                  padding: '15px',
                  borderRadius: 5,
                }}>
                <Grid container>
                  <Grid item sx={2}>
                    <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                      Truelock Alric
                    </Typography>
                  </Grid>
                  <Grid item sx={10}>
                    {' '}
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom>
                      {`  `}&nbsp; &nbsp; May 20, 2021
                    </Typography>
                  </Grid>
                </Grid>
                <Typography variant="body2" sx={{ marginTop: '10px' }}>
                  Praesent id massa id nisl venenatis lacinia. Aenean sit amet
                  justo. Morbi ut odio.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginBottom: '20px' }}>
          <Grid container>
            <Grid item xs={0.8} sx={{ marginTop: '10px' }}>
              <Avatar sx={{ bgColor: 'green' }}>S</Avatar>
            </Grid>
            <Grid item xs={11.2}>
              <Box
                sx={{
                  backgroundColor: '#f5f5f5',
                  border: '5px solid',
                  borderColor: '#f5f5f5',
                  padding: '15px',
                  borderRadius: 5,
                }}>
                <Grid container>
                  <Grid item sx={2}>
                    <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                      Truelock Alric
                    </Typography>
                  </Grid>
                  <Grid item sx={10}>
                    {' '}
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom>
                      {`  `}&nbsp; &nbsp; May 20, 2021
                    </Typography>
                  </Grid>
                </Grid>
                <Typography variant="body2" sx={{ marginTop: '10px' }}>
                  Praesent id massa id nisl venenatis lacinia. Aenean sit amet
                  justo. Morbi ut odio.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginBottom: '20px' }}>
          <Grid container>
            <Grid item xs={0.8} sx={{ marginTop: '10px' }}>
              <Avatar sx={{ bgColor: 'green' }}>S</Avatar>
            </Grid>
            <Grid item xs={11.2}>
              <Box
                sx={{
                  backgroundColor: '#f5f5f5',
                  border: '5px solid',
                  borderColor: '#f5f5f5',
                  padding: '15px',
                  borderRadius: 5,
                }}>
                <Grid container>
                  <Grid item sx={2}>
                    <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                      Truelock Alric
                    </Typography>
                  </Grid>
                  <Grid item sx={10}>
                    {' '}
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom>
                      {`  `}&nbsp; &nbsp; May 20, 2021
                    </Typography>
                  </Grid>
                </Grid>
                <Typography variant="body2" sx={{ marginTop: '10px' }}>
                  Praesent id massa id nisl venenatis lacinia. Aenean sit amet
                  justo. Morbi ut odio.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1, marginTop: '100px' }}>
        <Typography
          variant="h4"
          color="initial"
          sx={{ fontWeight: 600, marginBottom: '40px' }}>
          Related Posts
        </Typography>
        <Box>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Card
                sx={{
                  maxWidth: 290,
                  borderRadius: '30px',
                  position: 'relative',
                }}>
                <CardMedia
                  component="img"
                  height="210"
                  image={cardImg1}
                  alt="Paella dish"
                />
                <Button
                  sx={{
                    boderRadius: '100',
                    color: '#DA7F8F',
                    backgroundColor: '#FFE3E3',
                    fontSize: '12px',
                    fontWeight: '700',
                    marginBottom: '20px',
                    borderRadius: 10,
                    padding: '2px 10px',
                    position: 'absolute',
                    left: 15,
                    top: 15,
                    '&:hover': {
                      backgroundColor: 'pink',
                      borderRadius: 10,
                    },
                  }}>
                  Jewelry
                </Button>
                <CardHeader
                  avatar={
                    <Avatar sx={{ backgroundColor: 'red' }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={<IconButton aria-label="settings"></IconButton>}
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />

                <CardContent sx={{}}>
                  <Typography
                    variant="h6"
                    color="inherit"
                    sx={{
                      fontWeight: 600,
                    }}>
                    This impressive paella is a perfect party dish
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Button
                    color="inherit"
                    sx={{
                      borderRadius: 10,
                      padding: '5px 20px',
                      marginTop: '5px',
                      marginLeft: '10px',
                      marginRight: '10px',
                      backgroundColor: '#fafafa',
                      '&:hover': {
                        backgroundColor: '#eeeeee',
                        borderRadius: 10,
                      },
                    }}
                    startIcon={<FavoriteBorderIcon />}>
                    30
                  </Button>
                  <Button
                    color="inherit"
                    sx={{
                      borderRadius: 10,
                      padding: '5px 20px',
                      marginTop: '5px',
                      backgroundColor: '#fafafa',
                      '&:hover': {
                        backgroundColor: '#eeeeee',
                        borderRadius: 10,
                      },
                    }}
                    startIcon={<ReviewsIcon />}>
                    100
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item>
              {' '}
              <Card
                sx={{
                  maxWidth: 290,
                  borderRadius: '30px',
                  position: 'relative',
                }}>
                <CardMedia
                  component="img"
                  height="210"
                  image={cardImg1}
                  alt="Paella dish"
                />
                <Button
                  sx={{
                    boderRadius: '100',
                    color: '#DA7F8F',
                    backgroundColor: '#FFE3E3',
                    fontSize: '12px',
                    fontWeight: '700',
                    marginBottom: '20px',
                    borderRadius: 10,
                    padding: '2px 10px',
                    position: 'absolute',
                    left: 15,
                    top: 15,
                    '&:hover': {
                      backgroundColor: 'pink',
                      borderRadius: 10,
                    },
                  }}>
                  Jewelry
                </Button>
                <CardHeader
                  avatar={
                    <Avatar sx={{ backgroundColor: 'red' }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={<IconButton aria-label="settings"></IconButton>}
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />

                <CardContent sx={{}}>
                  <Typography
                    variant="h6"
                    color="inherit"
                    sx={{
                      fontWeight: 600,
                    }}>
                    This impressive paella is a perfect party dish
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Button
                    color="inherit"
                    sx={{
                      borderRadius: 10,
                      padding: '5px 20px',
                      marginTop: '5px',
                      marginLeft: '10px',
                      marginRight: '10px',
                      backgroundColor: '#fafafa',
                      '&:hover': {
                        backgroundColor: '#eeeeee',
                        borderRadius: 10,
                      },
                    }}
                    startIcon={<FavoriteBorderIcon />}>
                    30
                  </Button>
                  <Button
                    color="inherit"
                    sx={{
                      borderRadius: 10,
                      padding: '5px 20px',
                      marginTop: '5px',
                      backgroundColor: '#fafafa',
                      '&:hover': {
                        backgroundColor: '#eeeeee',
                        borderRadius: 10,
                      },
                    }}
                    startIcon={<ReviewsIcon />}>
                    100
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item>
              <Card
                sx={{
                  maxWidth: 290,
                  borderRadius: '30px',
                  position: 'relative',
                }}>
                <CardMedia
                  component="img"
                  height="210"
                  image={cardImg1}
                  alt="Paella dish"
                />
                <Button
                  sx={{
                    boderRadius: '100',
                    color: '#DA7F8F',
                    backgroundColor: '#FFE3E3',
                    fontSize: '12px',
                    fontWeight: '700',
                    marginBottom: '20px',
                    borderRadius: 10,
                    padding: '2px 10px',
                    position: 'absolute',
                    left: 15,
                    top: 15,
                    '&:hover': {
                      backgroundColor: 'pink',
                      borderRadius: 10,
                    },
                  }}>
                  Jewelry
                </Button>
                <CardHeader
                  avatar={
                    <Avatar sx={{ backgroundColor: 'red' }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={<IconButton aria-label="settings"></IconButton>}
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />

                <CardContent sx={{}}>
                  <Typography
                    variant="h6"
                    color="inherit"
                    sx={{
                      fontWeight: 600,
                    }}>
                    This impressive paella is a perfect party dish
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Button
                    color="inherit"
                    sx={{
                      borderRadius: 10,
                      padding: '5px 20px',
                      marginTop: '5px',
                      marginLeft: '10px',
                      marginRight: '10px',
                      backgroundColor: '#fafafa',
                      '&:hover': {
                        backgroundColor: '#eeeeee',
                        borderRadius: 10,
                      },
                    }}
                    startIcon={<FavoriteBorderIcon />}>
                    30
                  </Button>
                  <Button
                    color="inherit"
                    sx={{
                      borderRadius: 10,
                      padding: '5px 20px',
                      marginTop: '5px',
                      backgroundColor: '#fafafa',
                      '&:hover': {
                        backgroundColor: '#eeeeee',
                        borderRadius: 10,
                      },
                    }}
                    startIcon={<ReviewsIcon />}>
                    100
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item>
              {' '}
              <Card
                sx={{
                  maxWidth: 290,
                  borderRadius: '30px',
                  position: 'relative',
                }}>
                <CardMedia
                  component="img"
                  height="210"
                  image={cardImg1}
                  alt="Paella dish"
                />
                <Button
                  sx={{
                    boderRadius: '100',
                    color: '#DA7F8F',
                    backgroundColor: '#FFE3E3',
                    fontSize: '12px',
                    fontWeight: '700',
                    marginBottom: '20px',
                    borderRadius: 10,
                    padding: '2px 10px',
                    position: 'absolute',
                    left: 15,
                    top: 15,
                    '&:hover': {
                      backgroundColor: 'pink',
                      borderRadius: 10,
                    },
                  }}>
                  Jewelry
                </Button>
                <CardHeader
                  avatar={
                    <Avatar sx={{ backgroundColor: 'red' }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={<IconButton aria-label="settings"></IconButton>}
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />

                <CardContent sx={{}}>
                  <Typography
                    variant="h6"
                    color="inherit"
                    sx={{
                      fontWeight: 600,
                    }}>
                    This impressive paella is a perfect party dish
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Button
                    color="inherit"
                    sx={{
                      borderRadius: 10,
                      padding: '5px 20px',
                      marginTop: '5px',
                      marginLeft: '10px',
                      marginRight: '10px',
                      backgroundColor: '#fafafa',
                      '&:hover': {
                        backgroundColor: '#eeeeee',
                        borderRadius: 10,
                      },
                    }}
                    startIcon={<FavoriteBorderIcon />}>
                    30
                  </Button>
                  <Button
                    color="inherit"
                    sx={{
                      borderRadius: 10,
                      padding: '5px 20px',
                      marginTop: '5px',
                      backgroundColor: '#fafafa',
                      '&:hover': {
                        backgroundColor: '#eeeeee',
                        borderRadius: 10,
                      },
                    }}
                    startIcon={<ReviewsIcon />}>
                    100
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogDetails;

// import "./single.css";
// import Sidebar from "../../components/sidebar/Sidebar";
// import SinglePost from "../../components/singlePost/SinglePost";

// export default function Single() {
//   return (
//     <div className="single">
//       <SinglePost/>
//       <Sidebar />
//     </div>
//   );
// }
