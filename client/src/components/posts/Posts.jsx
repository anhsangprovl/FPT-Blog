import Post from "../post/Post";
import "./posts.css";
import { Box, Grid } from '@mui/material';
export default function Posts({ posts }) {
  return (
    <div className="posts">
      <Grid container spacing={9.6}>
        {posts.map((p) => (
          <Post post={p} />
        ))}
      </Grid>
    </div>
  );
}
