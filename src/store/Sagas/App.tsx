import { put } from "redux-saga/effects";
import * as appActions from "../Actions/App";
import axios from "../../axios";
import { film } from "../Interfaces/DataTypes";

export function* StartApp(): any {
  try {
    const resFilms = yield axios.get("/films");

    // Films

    const films: film[] = resFilms.data.results.map((x: film) => {
      return {
        title: x.title,
        director: x.director,
        episode_id: x.episode_id,
        isFavorite: false,
      };
    });

    yield put(appActions.FetchedFilms(films));

    //Characters
    //yield put(appActions.FetchedCharacters([]));
    
  } catch (error) {
    //yield put(actions.fetchFailed());
  }
}
