import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcrypt'

class Admin extends Model {
  static init(sequelize) {
    super.init({
      user: Sequelize.STRING,
      password_hash: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
    }, {
      sequelize
    });
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash)
  }
}

export default Admin;