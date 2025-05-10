const productService = require('../services/product.service');

const getAll = async (req, res) => {
  const productos = await productService.getAllProducts();
  res.json(productos);
};

const getOne = async (req, res) => {
  const producto = await productService.getProduct(req.params.id);
  if (producto) res.json(producto);
  else res.status(404).json({ error: 'Producto no encontrado' });
};

const create = async (req, res) => {
    console.log("flag");
  const nuevo = await productService.createProduct(req.body);
  res.status(201).json(nuevo);
};

const update = async (req, res) => {
  const actualizado = await productService.updateProduct(req.params.id, req.body);
  if (actualizado) res.json(actualizado);
  else res.status(404).json({ error: 'Producto no encontrado para actualizar' });
};

const remove = async (req, res) => {
  await productService.deleteProduct(req.params.id);
  res.status(204).end();
};

module.exports = { getAll, getOne, create, update, remove };
