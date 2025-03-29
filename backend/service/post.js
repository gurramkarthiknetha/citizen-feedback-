const { postModel } = require('../Api/post');

const createPost = async (postData) => {
  try {
    const newPost = new postModel(postData);
    return await newPost.save();
  } catch (error) {
    throw new Error('Error creating post: ' + error.message);
  }
};

const getPosts = async () => {
  try {
    return await postModel.find().populate('userId', 'fullname email');
  } catch (error) {
    throw new Error('Error fetching posts: ' + error.message);
  }
};

module.exports = { createPost, getPosts };
