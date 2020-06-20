import * as Yup from 'yup'
import City from '../Models/City';

export default {
  async index(req, res) {
    const cities = await City.findAll({
      attributes: ['name', 'country', 'video_id'],
    });

    return res.json(cities);
  },

  async create(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      name: Yup.string().required(),
      video_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation error' });
    }

    const cityExist = await City.findOne({
      where: {
        name: req.body.name,
      }
    })

    if (cityExist) {
      return res.status(400).json({ error: 'City already exists' })
    }

    const { id, name, country, video_id } = await City.create(req.body);

    return res.json({
      id,
      name,
      country,
      video_id,
    })
  }
}