import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import productsReducer from "./../reducers/products.reducer";
import createSagaMiddleware from "redux-saga";
import {
  initEventSagas,
  initProductSagas,
  initBrandSagas,
  initCategorySagas,
  initUserSagas,
} from "./../sagas/index";
import eventsReducer from "./../reducers/events.reducer";
import brandsReducer from "./../reducers/brands.reducer";
import categoriesReducer from "./../reducers/categories.reducer";
import usersReducer from "./../reducers/users.reducer";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const configureStore = () => {
  const store = createStore(
    combineReducers({
      products: productsReducer,
      events: eventsReducer,
      brands: brandsReducer,
      categories: categoriesReducer,
      users: usersReducer,
    }),
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  initProductSagas(sagaMiddleware);
  initEventSagas(sagaMiddleware);
  initBrandSagas(sagaMiddleware);
  initCategorySagas(sagaMiddleware);
  initUserSagas(sagaMiddleware);

  return store;
};
export default configureStore;
