import axios from "axios";
import { call, put, take } from "redux-saga/effects";
import types from "./../actions/categories.actions";

export function* getAllBrands() {
  yield take(types.GET_CATEGORIES);
  const result = yield call(axios, "http://localhost:8080/api/categories");
  yield put({ type: types.POPULATE_CATEGORIES, payload: result.data.data });
}
