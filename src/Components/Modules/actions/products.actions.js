const types = {
  GET_PRODUCTS: "GET_PRODUCTS",
  POPULATE_PRODUCTS: "POPULATE_PRODUCTS",
  ADD_PRODUCT: "ADD_PRODUCT",
  REMOVE_PRODUCT: "REMOVE_PRODUCT",
  UPDATE_PRODUCT: "UPDATE_PRODUCT",
};

export default types;

export const addProduct = (payload) => {
  return { type: types.ADD_PRODUCT, payload };
};
export const removeProduct = (id) => {
  return { type: types.REMOVE_PRODUCT, payload: { id } };
};

export const updateProduct = (id, product) => {
  return { type: types.UPDATE_PRODUCT, payload: { id, product } };
};

export const getAllProducts = () => {
  return { type: types.GET_PRODUCTS };
};

export const populateProducts = (products) => {
  return { type: types.POPULATE_PRODUCTS, payload: products };
};
