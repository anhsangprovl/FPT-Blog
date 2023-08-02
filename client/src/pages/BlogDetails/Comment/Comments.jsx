import { useState, useEffect, useContext } from 'react';
import {
  Box,
  TextareaAutosize,
  Button,
  styled,
  Typography,
} from '@mui/material';
import { Context } from '../../../context/Context';
import axios from 'axios';
import Textarea from '@mui/joy/Textarea';
//components
import Comment from './Comment';

const Container = styled(Box)`
  margin-top: 100px;
  display: flex;
`;

const Image = styled('img')({
  width: 50,
  height: 50,
  borderRadius: '50%',
});

const StyledTextArea = styled(TextareaAutosize)`
  height: 100px !important;
  width: 100%;
  margin: 0 20px;
`;

const initialValue = {
  name: '',
  postId: '',
  comments: '',
};

const Comments = ({ post, countComment }) => {
  const url = 'https://static.thenounproject.com/png/12017-200.png';

  const [comment, setComment] = useState(initialValue);
  const [comments, setComments] = useState([]);
  const [toggle, setToggle] = useState(false);
  const { user } = useContext(Context);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        'http://localhost:5000/comments/' + post._id
      );

      console.log(response.data);
      countComment(response.data.length);

      setComments(response.data);
    };
    getData();
  }, [toggle, post]);

  const handleChange = (e) => {
    setComment({
      ...comment,
      name: user.username,
      postId: post._id,
      comments: e.target.value,
    });
  };

  const addComment = async () => {
    try {
      await axios.post('http://localhost:5000/comments/createComment', comment);
    } catch (err) {
      console.log(err);
    }

    setComment(initialValue);
    setToggle((prev) => !prev);
  };

  return (
    <Box sx={{ flexGrow: 1, marginTop: '40px', marginBottom: '20px' }}>
      <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: '20px' }}>
        Comments ({comments.length})
      </Typography>
      <Box sx={{ width: '100%' }}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
          style={{ width: '90%' }}>
          <Textarea
            onChange={(e) => handleChange(e)}
            value={comment.comments}
            placeholder="Add to discussion"
            required
            minRows={4}
            // sx={{ mb: 1 }}
          />

          <Button
            type="submit"
            variant="contained"
            onClick={(e) => addComment(e)}
            sx={{ borderRadius: 10, marginTop: '10px', width: '100px' }}>
            Submit
          </Button>
        </form>
      </Box>

      <Box>
        {comments.reverse().map((comment) => (
          <Comment comment={comment} setToggle={setToggle} />
        ))}
      </Box>
    </Box>
    // <Box>
    //   <Container>
    //     <Image src={url} alt="dp" />
    //     <StyledTextArea
    //       rowsMin={5}
    //       placeholder="what's on your mind?"
    //       onChange={(e) => handleChange(e)}
    //       value={comment.comments}
    //     />
    //     <Button
    //       variant="contained"
    //       color="primary"
    //       size="medium"
    //       style={{ height: 40 }}
    //       onClick={(e) => addComment(e)}>
    //       Post
    //     </Button>
    //   </Container>
    //   <Box>
    //     {comments.map((comment) => (
    //       <Comment comment={comment} setToggle={setToggle} />
    //     ))}
    //   </Box>
    // </Box>
  );
};

export default Comments;
