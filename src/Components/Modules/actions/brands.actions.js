const types = {
  GET_BRANDS: "GET_BRANDS",
  POPULATE_BRANDS: "POPULATE_BRANDS",
  ADD_BRAND: "ADD_BRAND",
  REMOVE_BRAND: "REMOVE_BRAND",
  UPDATE_BRAND: "UPDATE_BRAND",
};

export default types;

export const addBrand = (payload) => {
  return { type: types.ADD_BRAND, payload };
};
export const removeBrand = (id) => {
  return { type: types.REMOVE_BRAND, payload: { id } };
};

export const updateBrand = (id, brand) => {
  return { type: types.UPDATE_BRAND, payload: { id, brand } };
};

export const getAllBrands = () => {
  return { type: types.GET_BRANDS };
};

export const populateBrands = (brands) => {
  return { type: types.POPULATE_BRANDS, payload: brands };
};
