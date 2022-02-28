const types = {
  GET_USERS: "GET_USERS",
  POPULATE_USERS: "POPULATE_USERS",
  ADD_USER: "ADD_USER",
  REMOVE_USER: "REMOVE_USER",
  UPDATE_USER: "UPDATE_USER",
};

export default types;

export const addUser = (payload) => {
  return { type: types.ADD_USER, payload };
};
export const removeUser = (id) => {
  return { type: types.REMOVE_USER, payload: { id } };
};

export const updateUser = (id, user) => {
  return { type: types.UPDATE_USER, payload: { id, user } };
};

export const getAllUsers = () => {
  return { type: types.GET_USERS };
};

export const populateUsers = (users) => {
  return { type: types.POPULATE_USERS, payload: users };
};
