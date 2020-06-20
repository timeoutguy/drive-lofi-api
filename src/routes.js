import { Router } from 'express';

import CityController from './app/Controllers/CityController';

const routes = Router();

routes.get('/cities', CityController.index);
routes.post('/cities', CityController.create);

export default routes;