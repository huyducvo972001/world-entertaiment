const types = {
  GET_CATEGORIES: "GET_CATEGORIES",
  POPULATE_CATEGORIES: "POPULATE_CATEGORIES",
  ADD_CATEGORY: "ADD_CATEGORY",
  REMOVE_CATEGORY: "REMOVE_CATEGORY",
  UPDATE_CATEGORY: "UPDATE_CATEGORY",
};

export default types;

export const addCategory = (payload) => {
  return { type: types.ADD_CATEGORY, payload };
};
export const removeCategory = (id) => {
  return { type: types.REMOVE_CATEGORY, payload: { id } };
};

export const updateCategory = (id, category) => {
  return { type: types.UPDATE_CATEGORY, payload: { id, category } };
};

export const getAllCategories = () => {
  return { type: types.GET_CATEGORIES };
};

export const populateCategories = (category) => {
  return { type: types.POPULATE_CATEGORIES, payload: category };
};
