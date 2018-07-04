const express = require('express');
const axios = require('axios');
const router = express.Router();

const postAPI = 'https://jsonplaceholder.typicode.com';

router.get('/', (req, res) => {
  axios.get(`${postAPI}/posts`).then(posts => {
    res.status(200).json(posts.data);
  }).catch(err => {res.status(500).send(err)});
});

module.exports = router;
