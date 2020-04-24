const db = require("../data/dbConfig.js");

module.exports = {
    insert
  };

  async function insert(dnd) {
    return db("dnd").insert(dnd, "id");
  }