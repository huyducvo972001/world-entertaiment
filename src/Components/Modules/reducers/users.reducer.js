import api from "../api/contacts";
import types from "./../actions/users.actions";

const usersReducer = (state = inintialUsers, action) => {
  const addApi = async (data) => {
    await api.post("/users", data);
  };
  const removeContactHandler = async (id) => {
    await api.delete(`/users/${id}`);
  };
  const updateContactHandler = async (id, data) => {
    await api.put(`/users/${id}`, data);
  };
  let newUsers;
  switch (action.type) {
    case types.POPULATE_USERS:
      return action.payload;
    case types.ADD_USER:
      newUsers = state.concat({ ...action.payload });
      addApi(action.payload);
      return newUsers;
    case types.REMOVE_USER:
      newUsers = state.filter((user) => user.id !== action.payload.id);
      removeContactHandler(action.payload.id);
      return newUsers;
    case types.UPDATE_USER:
      newUsers = [...state];
      const index = newUsers.findIndex((user) => user.id === action.payload.id);
      newUsers[index] = { ...action.payload.user };
      updateContactHandler(action.payload.id, action.payload.user);
      return newUsers;
    default:
      return state;
  }
};

export default usersReducer;

var inintialUsers = [];
