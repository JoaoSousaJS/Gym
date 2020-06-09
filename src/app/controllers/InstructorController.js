import fs from 'fs';
import data from '../../../data.json';

/* eslint-disable class-methods-use-this */
class InstructorController {
  async store(req, res) {
    Object.values(req.body).forEach((value) => {
      if (value === '') {
        return res.json({ error: 'xii' });
      }
    });

    req.body.created_at = new Date();
    req.body.id = Number(data.instructors.length + 1);

    data.instructors.push(req.body);

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
      if (err) return res.send('Write file error');

      return res.json(data);
    });
  }
}

export default new InstructorController();
