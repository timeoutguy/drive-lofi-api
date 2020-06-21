import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import City from '../app/Models/City'
import Video from '../app/Models/Video'
import Admin from '../app/Models/Admin'

const connection = new Sequelize(dbConfig);

City.init(connection);
Video.init(connection);
Admin.init(connection);

City.associate(connection.models);