import { useContext } from 'react';

import { Typography, Box, styled, Avatar, Grid } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { Context } from '../../../context/Context';
import axios from 'axios';

const Component = styled(Box)`
  margin-top: 30px;
  background: #f5f5f5;
  padding: 10px;
`;

const Container = styled(Box)`
  display: flex;
  margin-bottom: 5px;
`;

const Name = styled(Typography)`
    font-weight: 600,
    font-size: 18px;
    margin-right: 20px;
`;

const StyledDate = styled(Typography)`
  font-size: 14px;
  color: #878787;
`;

const DeleteIcon = styled(Delete)`
  margin-left: auto;
`;

const Comment = ({ comment, setToggle }) => {
  const { user } = useContext(Context);
  const PE = `http://localhost:5000/images/`;
  const removeComment = async () => {
    try {
      await axios.delete(
        'http://localhost:5000/comments/delete/' + comment._id
      );
    } catch (err) {
      console.log(err);
    }

    setToggle((prev) => !prev);
  };

  return (
    <Box sx={{ marginBottom: '20px', marginTop: '20px' }}>
      <Grid container>
        <Grid item xs={0.8} sx={{ marginTop: '10px' }}>
          {comment.name === user.username ? (
            <Avatar src={PE + user.profilePic}></Avatar>
          ) : (
            <Avatar sx={{ bgColor: 'green' }}></Avatar>
          )}
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
            <Grid container spacing={2}>
              <Grid item xs={1}>
                <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                  {comment.name}
                </Typography>
              </Grid>
              <Grid item xs={10}>
                {' '}
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom>
                  {`  `}&nbsp; &nbsp;{' '}
                  {new Date(comment.createdAt).toDateString()}
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography
                  sx={{ fontSize: 16, fontWeight: 600, cursor: 'pointer' }}>
                  {comment.name === user.username && (
                    <DeleteIcon
                      color="primary"
                      onClick={() => removeComment()}
                    />
                  )}
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body2" sx={{ marginTop: '10px' }}>
              {comment.comments}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
    // <Component>
    //   <Container>
    //     <Name>{comment.name}</Name>
    //     <StyledDate>ngay </StyledDate>
    //     {comment.name === user.username && (
    //       <DeleteIcon onClick={() => removeComment()} />
    //     )}
    //   </Container>
    //   <Typography>{comment.comments}</Typography>
    // </Component>
  );
};

export default Comment;
