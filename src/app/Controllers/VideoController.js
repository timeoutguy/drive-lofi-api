import Video from '../Models/Video'
import { extname } from 'path'

export default {
  async store(req, res) {

    const { originalname: name, filename: path } = req.file;

    if (extname(name) != '.mp4') {
      return res.status(400).json({ error: 'Only mp4 files are suported' });
    }

    const video = await Video.create({ name, path });

    return res.json(video)
  }
}