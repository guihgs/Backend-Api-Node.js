const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();

//methods GET, POST, PUT, DELETE
//Query params ?name=Guilherme
/*routes.get('/', (req, res) => {
    //test response
    //return res.send('Hello World');
    //return res.send(`Hello ${req.query.name}`);
    return res.json({ message: `Olá ${req.query.name}`});
});*/
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);
/*routes.post('/devs', (req,res) => {
    //console.log(req.body);
    return res.json(req.body);
});*/

module.exports = routes;