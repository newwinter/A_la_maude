const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  constructor() {
    super({ table: "products" });
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }

  findRandom() {
    return this.database.query(
      `select p.id, p.name, p.price,
      (select id from images where images.product_id = p.id limit 1) as im_id, 
      (select src from images where images.id = im_id) as src, 
      (select alt from images where images.id = im_id) as alt 
      from ${this.table} as p
      order by rand() limit 6`
    );
  }

  findAllByCategorie(id) {
    return this.database.query(
      `select * from ${this.table} where category_id = ? `,
      [id]
    );
  }

  // insert(item) {
  //   return this.database.query(`insert into ${this.table} (title) values (?)`, [
  //     item.title,
  //   ]);
  // }

  // update(item) {
  //   return this.database.query(
  //     `update ${this.table} set title = ? where id = ?`,
  //     [item.title, item.id]
  //   );
  // }
}

module.exports = ProductManager;
