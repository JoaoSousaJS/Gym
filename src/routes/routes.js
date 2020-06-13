import { Router } from 'express';

import InstructionController from '../app/controllers/InstructorController';

const routes = new Router();

routes.get('/', function (req, res) {
  return res.send('ok');
});

routes.get('/instructors', function (req, res) {
  return res.send('instructores');
});

routes.get('/instructors/:id', InstructionController.show);

routes.post('/instructors', InstructionController.store);

routes.put('/instructors/:id', InstructionController.edit);

module.exports = routes;
