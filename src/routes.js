import { Router } from 'express';

import CityController from './app/Controllers/CityController';
import AdminController from './app/Controllers/AdminController';
import SessionController from './app/Controllers/SessionController';

import authMiddleware from './app/Middlewares/auth';

const routes = Router();

routes.get('/cities', CityController.index);

routes.get('/admins', AdminController.index);

routes.post('/session', SessionController.store);

routes.use(authMiddleware);
routes.post('/cities', CityController.store);
routes.put('/cities/:id', CityController.update)
routes.delete('/cities/:id', CityController.delete)
routes.post('/admins', AdminController.store);



export default routes;