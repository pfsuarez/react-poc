import * as actionTypes from "../Actions/ActionTypes";
import { takeEvery } from "redux-saga/effects";

import { StartApp } from "./App";

export function* watchApp() {
  yield takeEvery(actionTypes.START_APP, StartApp);
}