const AbstractManager = require("./AbstractManager");

class CategoriesManager extends AbstractManager {
  constructor() {
    super({ table: "categories" });
  }

  findAll() {
    return this.database.query(`select * from ${this.table}`);
  }

  find(id) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
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

module.exports = CategoriesManager;
