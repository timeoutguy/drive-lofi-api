import * as Yup from 'yup'
import City from '../Models/City';

export default {
  async index(req, res) {
    const cities = await City.findAll({
      attributes: ['id', 'name', 'country', 'video_id'],
    });

    return res.json(cities);
  },

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      country: Yup.string().required(),
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
  },

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      country: Yup.string(),
      video_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation error' });
    }

    const { id } = req.params;

    const city = await City.findByPk(id);

    if (!city) {
      return res.status(400).json({ error: 'City was not found' })
    }

    const { name } = req.body;

    if (name != city.name) {
      const cityExist = await City.findOne({ where: { name } })

      if (cityExist) {
        return res.status(400).json({ error: 'City already exists' })
      }
    }

    const { name: cityName, country, video_id } = await city.update(req.body)

    return res.json(city);
  },

  async delete(req, res) {
    const { id } = req.params;

    const city = await City.findByPk(id);

    if (!city) {
      return res.status(400).json({ error: 'City was not found' })
    }

    City.destroy({ where: { id } });

    return res.json({ success: "City deleted" })
  }
}