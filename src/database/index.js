import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import City from '../app/Models/City'
import Video from '../app/Models/Video'

const connection = new Sequelize(dbConfig);

City.init(connection);
Video.init(connection);

Video.associate(connection.models);