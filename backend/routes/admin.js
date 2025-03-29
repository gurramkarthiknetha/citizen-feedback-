const express = require('express');
const router = express.Router();
const { adminmodel } = require('../Api/admin');

router.get('/', (req, res) => {
    res.json({ message: 'Admin routes working' });
});

module.exports = router;
