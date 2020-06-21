import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import CityController from './app/Controllers/CityController';
import AdminController from './app/Controllers/AdminController';
import SessionController from './app/Controllers/SessionController';
import VideoController from './app/Controllers/VideoController';

import authMiddleware from './app/Middlewares/auth';

const routes = Router();
const upload = multer(multerConfig)

routes.get('/cities', CityController.index);

routes.get('/admins', AdminController.index);

routes.post('/session', SessionController.store);

routes.use(authMiddleware);
routes.post('/cities', CityController.store);
routes.put('/cities/:id', CityController.update)
routes.delete('/cities/:id', CityController.delete)
routes.post('/admins', AdminController.store);

routes.post('/videos', upload.single('file'), VideoController.store)



export default routes;