const db = require("../data/dbConfig.js");

module.exports = {
    insert,
    getAll
  };

  async function insert(dnd) {
    return db("dnd").insert(dnd, "id");
  }

  function getAll() {
    return db("dnd");
  }