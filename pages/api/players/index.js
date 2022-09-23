import models from '../../../db/models';

export default async function handler(req, res) {
  const teams = await models.Player.findAll();
  setTimeout(() => {
    res.status(200).json(teams);
  }, 2000);
}
