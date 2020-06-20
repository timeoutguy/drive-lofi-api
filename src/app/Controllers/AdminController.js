import * as Yup from 'yup'
import Admin from '../Models/Admin';

export default {
  async index(req, res) {
    const admins = await Admin.findAll();

    return res.json(admins);
  },

  async store(req, res) {
    const schema = Yup.object().shape({
      user: Yup.string().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation error' });
    }

    const adminExist = await Admin.findOne({
      where: {
        user: req.body.user,
      }
    })

    if (adminExist) {
      return res.status(400).json({ error: 'Admin already exists' })
    }

    const { id, user, password_hash } = await Admin.create(req.body);

    return res.json({
      id,
      user,
      password_hash,
    })
  }
}