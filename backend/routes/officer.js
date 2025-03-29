const express = require('express');
const router = express.Router();
const { officermodel } = require('../Api/officer');

router.get('/', (req, res) => {
    res.json({ message: 'Officer routes working' });
});

module.exports = router;
