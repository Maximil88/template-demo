require('dotenv').config();
const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const morgan = require('morgan');

const server = express();

server.get('/heartbeat', (reg, res) => {
    res.json({
        "is": "working"
    })
});


server.use('/', express.static(__dirname + '/public'));
// template rendering
server.engine('html', es6Renderer);
server.set('views', 'views');
server.set('view engine', 'html');

server.get('/', (req, res) => {
  res.render('landing', {
    partials: {
      footer: "partials/footer",
      header: "partials/header"
    }
  });
})

const {PORT} = process.env;

server.listen(PORT, () => {
  console.log(`The server is running at ${PORT}`);
})