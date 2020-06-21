import express from 'express';
import { resolve } from 'path'

import routes from './routes';

import './database';

const app = express();

app.use(express.json());
app.use('/videos', express.static(resolve(__dirname, '..', 'uploads')));
app.use(routes);


app.listen(3333, () => console.log("Running on http://localhost:3333"));