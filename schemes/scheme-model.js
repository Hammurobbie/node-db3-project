const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
  return db("schemes");
}

function findById(schemeId) {
  return db("schemes").where({ id: schemeId });
}

//needs work vv

function findSteps(id) {
  return db("schemes").join("steps", "schemes.id", "steps.scheme_id");
  // .where(("steps.scheme_id" = id));
}

//ask about id vv

function add(scheme) {
  return db("schemes").insert(scheme);
  //   .then(ids => {
  //     return findById(ids[0]);
}

function update(changes, schemeId) {
  return db("schemes")
    .where({ id: schemeId })
    .update(changes);
}

function remove(schemeId) {
  return db("schemes")
    .where({ id: schemeId })
    .del();
}
