const models = require("../models");

const browse = (req, res) => {
  if (req.query.type === "random") {
    models.product
      .findRandom()
      .then(([product]) => {
        res.send(product);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  } else {
    models.product
      .findAll()
      .then(([product]) => {
        res.send(product);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

const read = (req, res) => {
  models.product
    .find(req.params.id)
    .then(([product]) => {
      if (product[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(product[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const readbycategory = (req, res) => {
  models.product
    .findbycategory(req.params.id)
    .then(([product]) => {
      if (product[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(product[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// const edit = (req, res) => {
//   const item = req.body;

//   // TODO validations (length, format...)

//   item.id = parseInt(req.params.id, 10);

//   models.product
//     .update(item)
//     .then(([result]) => {
//       if (result.affectedRows === 0) {
//         res.sendStatus(404);
//       } else {
//         res.sendStatus(204);
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// };

// const add = (req, res) => {
//   const item = req.body;

//   // TODO validations (length, format...)

//   models.product
//     .insert(item)
//     .then(([result]) => {
//       res.location(`/products/${result.insertId}`).sendStatus(201);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// };

// const destroy = (req, res) => {
//   models.product
//     .delete(req.params.id)
//     .then(([result]) => {
//       if (result.affectedRows === 0) {
//         res.sendStatus(404);
//       } else {
//         res.sendStatus(204);
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// };

module.exports = {
  browse,
  read,
  readbycategory,
  // edit,
  // add,
  // destroy,
};
