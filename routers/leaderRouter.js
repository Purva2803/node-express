const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the leader points to you!');
})
.post((req, res, next) => {
    res.end('Will add the point to the leader: ' + req.body.name+ ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaderboard');
})
.delete((req, res, next) => {
    res.end('Deleting all dishes');
});

leaderRouter.route('/id/:leaderID')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the leaderID to you!');
})
.put((req, res, next) => {
    res.write('Will add the dish: ' + req.params.leaderID+ ' with details: ');
    res.end('will update the dish'+req.body.description);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end(' POST operation not supported on /dishes'+ req.params.leaderID);
})
.delete((req, res, next) => {
    res.end('Deleting the dishe '+ req.params.dishID);
});

module.exports = dishRouter;
