const express = require('express');
const { getData } = require('../database/queries');

const router = express.Router();
router.get('/show', (req, res) => {
  getData()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

module.exports = router;
