import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import authConfig from '../../config/auth';
import Admin from '../Models/Admin';

export default {
  async store(req, res) {
    const schema = Yup.object().shape({
      user: Yup.string().required(),
      password: Yup.string().required(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation error' });
    }

    const { user, password } = req.body;

    const admin = await Admin.findOne({
      where: { user }
    });

    if (!admin) {
      return res.status(401).json({ error: "User not found" })
    }

    if (!(await admin.checkPassword(password))) {
      return res.status(401).json({ error: "Wrong password" })
    }

    const { id } = admin;

    return res.json({
      user: {
        id,
        user,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      })
    })
  }
}




