import fs from 'fs';
import { formatISO, differenceInYears, parseISO } from 'date-fns';
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
    const {
      avatar_url,
      dob,
      duties,
      gender,
      instructor,
      id,
      created_at,
    } = req.body;

    data.instructors.push({
      avatar_url,
      dob,
      duties,
      gender,
      instructor,
      id,
      created_at,
    });

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
      if (err) return res.send('Write file error');

      return res.json(data);
    });
  }

  async show(req, res) {
    const { id } = req.params;

    const foundInstructor = data.instructors.find(
      (instructor) => instructor.id === Number(id)
    );

    if (!foundInstructor) return res.json({ error: 'instructor not found' });

    const dateFormatted = parseISO(foundInstructor.dob);
    const sinceFormatted = parseISO(foundInstructor.created_at);

    const instructor = {
      ...foundInstructor,
      age: differenceInYears(new Date(), dateFormatted),

      duties: foundInstructor.duties.split(','),
      since: formatISO(sinceFormatted, { representation: 'date' }),
    };

    return res.json(instructor);
  }

  async edit(req, res) {
    const { id } = req.params;

    const foundInstructor = data.instructors.find(
      (instructor) => instructor.id === Number(id)
    );

    if (!foundInstructor) return res.json({ error: 'instructor not found' });
  }
}

export default new InstructorController();
