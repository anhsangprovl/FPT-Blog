import './post.css';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
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
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Textarea from '@mui/joy/Textarea';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';

import bg1 from '../../images/bg1.jpg';
import cardImg1 from '../../images/cardImg1.jpg';

import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import { Context } from '../../context/Context';

export default function Post({ post }) {
  const PF = 'http://localhost:5000/images/';
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent;
  };
  return (
    <Grid item>
      <Card
        sx={{
          maxWidth: 290,
          height: 460,
          borderRadius: '5px',
          position: 'relative',
        }}>
        {post.photo && (
          <CardMedia
            component="img"
            height="180"
            image={PF + post.photo}
            alt="Paella dish"
          />
        )}
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
          {post.categories}
        </Button>
        <CardHeader
          avatar={
            <Avatar
              sx={{ backgroundColor: 'red' }}
              aria-label="recipe"></Avatar>
          }
          action={<IconButton aria-label="settings"></IconButton>}
          title={post.username}
          subheader={new Date(post.createdAt).toDateString()}
        />

        <CardContent sx={{}}>
          <Link to={`/post/${post._id}`} className="link">
            <Typography
              className="postTitle"
              variant="h5"
              color="inherit"
              component="h4">
              {post.title}
            </Typography>
          </Link>

          <Typography
            variant="h6"
            color="sub.secondary"
            sx={{
              fontSize: '14px',
              fontWeight: 400,
              marginBottom: '5px',
            }}
            className="postDesc"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post.desc),
            }}></Typography>
        </CardContent>
      </Card>
    </Grid>
    // <div className="post">
    //   {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
    //   <div className="postInfo">
    //     <div className="postCats">
    //       {post.categories.map((c) => (
    //         <span className="postCat">{c.name}</span>
    //       ))}
    //     </div>
    //     <Link to={`/post/${post._id}`} className="link">
    //       <span className="postTitle">{post.title}</span>
    //     </Link>
    //     <hr />
    //     <span className="postDate">
    //       {new Date(post.createdAt).toDateString()}
    //     </span>
    //   </div>
    //   <p
    //     className="postDesc"
    //     dangerouslySetInnerHTML={{
    //       __html: DOMPurify.sanitize(post.desc),
    //     }}></p>
    // </div>
  );
}

