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

function findSteps(scheme_id) {
  return db("schemes")
    .join("steps", "steps.scheme_id", "schemes.id")
    .where({ scheme_id })
    .orderBy("steps.step_number");
}

function add(scheme) {
  return db("schemes")
    .insert(scheme)
    .then(ids => {
      return findById(ids[0]);
    });
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
