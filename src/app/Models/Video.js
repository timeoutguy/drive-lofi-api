import Sequelize, { Model } from 'sequelize';

class Video extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      path: Sequelize.STRING,
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `http://localhost:3333/videos/${this.path}`
        }
      }
    }, {
      sequelize
    })
  };
}

export default Video;