import Sequelize, { Model } from 'sequelize';

class City extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      country: Sequelize.STRING,
    }, {
      sequelize
    })
  }
}

export default City