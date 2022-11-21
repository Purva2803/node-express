const express = require('express'),
http = require('http');
const hostname = 'localhost';
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());


app.use(express.static(__dirname + '/public'));

const dishRouter = require('./routers/dishRouter');
const promoRouter = require('./routers/promoRouter');
const leaderRouter = require('./routers/leaderRouter');


app.use('/dishes', dishRouter);
app.use('/promotions',promoRouter);


// app.use((req, res, next) => {
//   console.log(req.headers);
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<html><body><h1>This is an Express Server</h1></body></html>');

// });

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});