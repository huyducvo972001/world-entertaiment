import types from "./../actions/products.actions";
import api from "../api/contacts";

const productsReducer = (state = inintialProducts, action) => {
  const addApi = async (data) => {
    await api.post("/products", data);
  };
  const removeContactHandler = async (id) => {
    await api.delete(`/products/${id}`);
  };
  const updateContactHandler = async (id, data) => {
    await api.put(`/products/${id}`, data);
  };
  let newProducts;
  switch (action.type) {
    case types.POPULATE_PRODUCTS:
      return action.payload;
    case types.ADD_PRODUCT:
      newProducts = state.concat({ ...action.payload });
      addApi(action.payload);
      return newProducts;
    case types.REMOVE_PRODUCT:
      newProducts = state.filter((product) => product.id !== action.payload.id);
      removeContactHandler(action.payload.id);
      return newProducts;
    case types.UPDATE_PRODUCT:
      newProducts = [...state];
      const index = newProducts.findIndex(
        (product) => product.id === action.payload.id
      );
      newProducts[index] = { ...action.payload.product };

      updateContactHandler(action.payload.id, action.payload.product);
      return newProducts;
    default:
      return state;
  }
};

export default productsReducer;

var inintialProducts = [];
