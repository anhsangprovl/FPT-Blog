import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css';
import axios from 'axios';
import { useLocation } from 'react-router';
import Navbar from '../../components/navbar/navbar';
import { Box, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('http://localhost:5000/categories');
      setCats(res.data);
    };
    getCats();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:5000/posts' + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <Box>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '40px',
            marginTop: '30px',
          }}
          component="h3"
          variant="h3">
          Top trending topics
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: '20px',
            marginTop: '20px',
            marginBottom: '20px',
          }}
          color="sub.secondary"
          component="h5"
          variant="h5">
          Discover over 6 topics
        </Typography>
        <Box sx={{ display: 'flex', width: '600px', marginBottom: '30px' }}>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="space-between"
            justifyItems="center">
            {cats.map((cat, i) => (
              <Grid item key={i}>
                <Link to={`/?cat=${cat.name}`} className="link">
                  <Button
                    variant="contained"
                    color="inherit"
                    sx={{ borderRadius: '20px' }}>
                    {cat.name}
                  </Button>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <div className="home">
        <Posts posts={posts} />

        {/* <Sidebar /> */}
      </div>
    </>
  );
}
