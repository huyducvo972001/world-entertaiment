import axios from "axios";
import { call, put, take } from "redux-saga/effects";
import types from "../actions/products.actions";

export function* getAllProducts() {
  yield take(types.GET_PRODUCTS);
  const result = yield call(axios, "http://localhost:3004/products");
  yield put({ type: types.POPULATE_PRODUCTS, payload: result.data });
}
