import axios from "axios";
import { call, put, take } from "redux-saga/effects";
import types from "./../actions/users.actions";

export function* getAllUsers() {
  yield take(types.GET_USERS);
  const result = yield call(axios, "http://localhost:3004/users");
  yield put({ type: types.POPULATE_USERS, payload: result.data });
}
