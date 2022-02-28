import axios from "axios";
import { call, put, take } from "redux-saga/effects";
import types from "./../actions/brands.actions";

export function* getAllBrands() {
  yield take(types.GET_BRANDS);
  const result = yield call(axios, "http://localhost:3004/brands");
  yield put({ type: types.POPULATE_BRANDS, payload: result.data });
}
