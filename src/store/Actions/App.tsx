import * as actionTypes from "./ActionTypes";
import { film, character } from "../Interfaces/DataTypes";

export const StartApp = () => {
  return {
    type: actionTypes.START_APP
  }
};

export const FetchedCharacters = (characters:character[]) => {
  return {
    type: actionTypes.FETCHED_CHARACTERS,
    payload: characters
  }
};

export const FetchedFilms = (films:film[]) => {
  return {
    type: actionTypes.FETCHED_FILMS,
    payload: films
  }
};

export const FilmToggleFav = (episodeId: string) => {
  return {
    type: actionTypes.FILM_TOGGLE_FAV,
    payload: episodeId
  }
};