const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the promotions to you!');
})
.post((req, res, next) => {
    res.end('Will add the promotions: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    res.end('Deleting all promotions');
});
dishRouter.route('/id/:promotionID')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the ' + promotionID+' to you!');
})
.put((req, res, next) => {
    res.write('Will add the dish: ' + req.params.promotionID + ' with details: ');
    res.end('will update the dish'+req.body.description);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end(' POST operation not supported on /promotions'+ req.params.promotionID);
})
.delete((req, res, next) => {
    res.end('Deleting the promotions '+ req.params.dishID);
});

module.exports = promoRouter;


module.exports = promoRouter;