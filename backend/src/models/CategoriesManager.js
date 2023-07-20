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

  insert(categorie) {
    return this.database.query(
      `insert into ${this.table} (name, src, alt) values (?, ?, ?)`,
      [categorie.name, categorie.src, categorie.alt]
    );
  }

  // update(categorie) {
  //   return this.database.query(`update ${this.table} set = ? where id = ?`, [
  //     categorie.name,
  //     categorie.src,
  //     categorie.alt,
  //     categorie.id,
  //   ]);
  // }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }
}

module.exports = CategoriesManager;
