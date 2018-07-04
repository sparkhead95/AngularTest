const express = require('express');
const path = require('path');
const app = express();

const posts = require('./server/routes/posts');

app.use(express.static(path.join(__dirname, 'dist/ng5')));

app.use('/posts', posts);

// Catch all other routes, route them to index
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/ng5/index.html'));
});

const port = process.env.PORT || 4600;

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}.`);
});
