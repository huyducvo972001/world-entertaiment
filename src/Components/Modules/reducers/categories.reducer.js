import api from "../api/contacts";
import types from "./../actions/categories.actions";

const categoriesReducer = (state = inintialCategories, action) => {
  const addApi = async (data) => {
    await api.post("/categories", data);
  };
  const removeContactHandler = async (id) => {
    await api.delete(`/categories/${id}`);
  };
  const updateContactHandler = async (id, data) => {
    await api.put(`/categories/${id}`, data);
  };
  let newCategories;
  switch (action.type) {
    case types.POPULATE_CATEGORIES:
      return action.payload;
    case types.ADD_CATEGORY:
      newCategories = state.concat({ ...action.payload });
      addApi(action.payload);
      return newCategories;
    case types.REMOVE_CATEGORY:
      newCategories = state.filter(
        (category) => category.id !== action.payload.id
      );
      removeContactHandler(action.payload.id);
      return newCategories;
    case types.UPDATE_CATEGORY:
      newCategories = [...state];
      const index = newCategories.findIndex(
        (category) => category.id === action.payload.id
      );
      newCategories[index] = { ...action.payload.category };
      updateContactHandler(action.payload.id, action.payload.category);
      return newCategories;
    default:
      return state;
  }
};

export default categoriesReducer;

var inintialCategories = [];
