const express = require('express');
const router = express.Router();
const { createPost, getPosts } = require('../service/post');

router.post('/create', async (req, res) => {
  try {
    // Log the incoming request for debugging
    console.log('Received post request:', req.body);
    
    const post = await createPost(req.body);
    res.status(201).json(post);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: error.message });
  }
});

router.get('/all', async (req, res) => {
  try {
    const posts = await getPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
