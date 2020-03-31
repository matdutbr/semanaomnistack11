const express = require('express');

const OngController = require('./controllers/OngController');
const incidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//routes.get('/ongs', async (request, response) => {
 
//});
routes.post('/sessions', SessionController.index);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.delete('/ongs/1', OngController.delete);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

//routes.post('/ongs', async (request, response) => {
    // const params = request.query; // Query Params app.get('/users/?name=mateus&idade=45
    // const params = request.params; // Route Params app.get('/users/1
    //const data = request.body;
    //console.log(data);
   

    //.send('Hello world')
//});

module.exports = routes;
 