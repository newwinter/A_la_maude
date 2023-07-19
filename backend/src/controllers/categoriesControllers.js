const models = require("../models");

const browse = (req, res) => {
  models.categories
    .findAll()
    .then(([categories]) => {
      res.status(200).json(categories);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.categories
    .find(req.params.id)
    .then(([categories]) => {
      if (categories[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(categories[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = async (req, res) => {
  const categories = req.body;
  // TODO validations (length, format...)

  models.categories
    .insert(categories)
    .then(([result]) => {
      res.location(`/categories/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  add,
};
