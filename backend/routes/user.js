const express = require('express');
const router = express.Router();
const { usermodel } = require('../Api/user');

router.get('/', (req, res) => {
    res.json({ message: 'User routes working' });
});

module.exports = router;
