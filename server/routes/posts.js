const express = require('express');
const axios = require('axios');
const router = express.Router();

const postAPI = 'https://jsonplaceholder.typicode.com';

router.get('/', (req, res) => {
  axios.get(`${postAPI}/posts`).then(posts => {
    res.send(posts.data);
  }).catch(err => {res.send(`${err.message} for ${postAPI}`)});
});

module.exports = router;
