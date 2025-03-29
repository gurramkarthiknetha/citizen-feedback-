const { postModel } = require('../Api/post');

const createPost = async (postData) => {
  try {
    if (!postData.title || !postData.name || !postData.category) {
      throw new Error('Missing required fields');
    }

    const newPost = new postModel({
      ...postData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
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
