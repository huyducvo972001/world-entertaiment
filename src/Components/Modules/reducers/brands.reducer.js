import api from "../api/contacts";
import types from "./../actions/brands.actions";

const brandsReducer = (state = inintialBrands, action) => {
  const addApi = async (data) => {
    await api.post("/brands", data);
  };
  const removeContactHandler = async (id) => {
    await api.delete(`/brands/${id}`);
  };
  const updateContactHandler = async (id, data) => {
    await api.put(`/brands/${id}`, data);
  };
  let newBrands;
  switch (action.type) {
    case types.POPULATE_BRANDS:
      return action.payload;
    case types.ADD_BRAND:
      newBrands = state.concat({ ...action.payload });
      addApi(action.payload);
      return newBrands;
    case types.REMOVE_BRAND:
      newBrands = state.filter((brand) => brand.id !== action.payload.id);
      removeContactHandler(action.payload.id);
      return newBrands;
    case types.UPDATE_BRAND:
      newBrands = [...state];
      const index = newBrands.findIndex(
        (brand) => brand.id === action.payload.id
      );
      newBrands[index] = { ...action.payload.brand };
      updateContactHandler(action.payload.id, action.payload.brand);
      return newBrands;
    default:
      return state;
  }
};

export default brandsReducer;

var inintialBrands = [];
