const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the dishes to you!');
})
.post((req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    res.end('Deleting all dishes');
});

dishRouter.route('/id/:dishID')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the disheID to you!');
})
.put((req, res, next) => {
    res.write('Will add the dish: ' + req.params.dishID + ' with details: ');
    res.end('will update the dish'+req.body.description);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end(' POST operation not supported on /dishes'+ req.params.dishID);
})
.delete((req, res, next) => {
    res.end('Deleting the dishe '+ req.params.dishID);
});

module.exports = dishRouter;
