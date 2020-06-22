import express from 'express';
import { resolve } from 'path'
import 'dotenv/config';

import routes from './routes';

import './database';

const app = express();

app.use(express.json());
app.use('/videos', express.static(resolve(__dirname, '..', 'uploads')));
app.use(routes);


app.listen(process.env.APP_PORT, () => console.log(`Running on ${process.env.APP_URL}`));