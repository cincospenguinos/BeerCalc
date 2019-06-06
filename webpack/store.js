import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

import fermentablesReducer from 'features/fermentables/reducers/fermentables-reducers';

export default function configureStore() {
  return createStore(fermentablesReducer,
    {},
    applyMiddleware(logger),
  );
}
