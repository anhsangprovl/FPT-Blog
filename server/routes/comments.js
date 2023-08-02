const router = require('express').Router();
const Comment = require('../models/Comment');

router.post('/createComment', async (request, response) => {
  try {
    const comment = await new Comment(request.body);
    comment.save();

    response.status(200).json('Comment saved successfully');
  } catch (error) {
    response.status(500).json(error);
  }
});

router.get('/:id', async (request, response) => {
  try {
    const comments = await Comment.find({ postId: request.params.id });

    response.status(200).json(comments);
  } catch (error) {
    response.status(500).json(error);
  }
});

router.delete('/delete/:id', async (request, response) => {
  try {
    const comment = await Comment.findById(request.params.id);
    await comment.delete();

    response.status(200).json('comment deleted successfully');
  } catch (error) {
    response.status(500).json(error);
  }
});
module.exports = router;
