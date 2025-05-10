const productRepository = require('../repositories/product.repository');

const getAllProducts = () => productRepository.getAll();
const getProduct = (id) => productRepository.getById(id);
const createProduct = (data) => productRepository.create(data.descripcion, data.precio);
const updateProduct = (id, data) => productRepository.update(id, data.descripcion, data.precio);
const deleteProduct = (id) => productRepository.remove(id);

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
