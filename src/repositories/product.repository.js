const db = require('../db');

const getAll = async () => {
  const res = await db.query('SELECT * FROM producto');
  return res.rows;
};

const getById = async (id) => {
  const res = await db.query('SELECT * FROM producto WHERE id = $1', [id]);
  return res.rows[0];
};

const create = async (descripcion, precio) => {
  const res = await db.query(
    'INSERT INTO producto (descripcion, precio) VALUES ($1, $2) RETURNING *',
    [descripcion, precio]
  );
  return res.rows[0];
};

const update = async (id, descripcion, precio) => {
  const res = await db.query(
    'UPDATE producto SET descripcion = $1, precio = $2 WHERE id = $3 RETURNING *',
    [descripcion, precio, id]
  );
  return res.rows[0];
};

const remove = async (id) => {
  await db.query('DELETE FROM producto WHERE id = $1', [id]);
};

module.exports = { getAll, getById, create, update, remove };
