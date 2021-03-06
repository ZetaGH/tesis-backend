const Knex = require("../db/knex");
const tableNames = require("../constants/tableNames");
const userTableName = tableNames.user;
/**
 * @param {Knex} knex
 */

function create() {}
async function getAll({ name }) {
  if (name) {
    return await Knex(userTableName)
      .select()
      .where(`${userTableName}.name`, "ilike", `%${name}%`);
  }
  return await Knex(userTableName).select();
}
function updateById() {}
function deleteById() {}

module.exports = {
  create,
  getAll,
  updateById,
  deleteById,
};
