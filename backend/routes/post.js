const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { postModel } = require('../Api/post');

// Configure multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    },
    fileFilter: function (req, file, cb) {
        const filetypes = /jpeg|jpg|png|gif/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(new Error('Only image files are allowed!'));
    }
});

router.post('/create', upload.single('image'), async (req, res) => {
    try {
        console.log('Received request:', req.body);
        console.log('File:', req.file);
        
        if (!req.file) {
            return res.status(400).json({ message: 'No image file provided' });
        }

        const postData = {
            title: req.body.title,
            name: req.body.name,
            image: req.file.path,
            userId: '65f4d95a8f894c23c6b33333', // Using a default system userId
            tags: {
                priority: req.body.priority || 'Medium',
                category: req.body.category || 'General',
                status: 'Open'
            },
            address: req.body.address
        };
        
        const newPost = new postModel(postData);
        const savedPost = await newPost.save();
        
        res.status(201).json({ 
            message: 'Post created successfully', 
            post: savedPost 
        });
    } catch (error) {
        console.error('Error in /create route:', error);
        res.status(500).json({ 
            message: 'Error creating post', 
            error: error.message 
        });
    }
});

module.exports = router;
