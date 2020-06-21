import Sequelize, { Model } from 'sequelize';

class City extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      country: Sequelize.STRING,
    }, {
      sequelize
    })
  };

  static associate(models) {
    this.belongsTo(models.Video, { foreignKey: 'video_id', as: 'video' });
  };
}

export default City