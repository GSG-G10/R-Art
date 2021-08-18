const express = require('express');
const { getData, postData } = require('../database/queries');

const router = express.Router();
router.get('/show', (req, res) => {
  getData()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});
router.post('/addPost', (req, res) => {
  postData(req.body.artist_name, req.body.painting_name, req.body.image_url)
    .then(result => res.redirect('/'))
    .catch(err => res.status(500).json({ msg: 'Internal Server Error' }));
});
module.exports = router;
