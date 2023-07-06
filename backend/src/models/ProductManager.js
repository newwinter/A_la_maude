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
      `select * from ${this.table} order by rand() limit 6`
    );
  }

  insert(item) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      item.title,
    ]);
  }

  update(item) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = ProductManager;
