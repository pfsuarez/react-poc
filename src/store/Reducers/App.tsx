import * as actionTypes from "../Actions/ActionTypes";

export interface character {
  name: string,
  birth_year: string,
  eye_color: string,
  gender: string,
  isFavorite: boolean
};

export interface film {
  title: string
  director: string,
  episode_id: string,
  isFavorite: boolean
}

export interface IState {
  characters: character[],
  films: film[]
};

const initialState: IState = {
  characters: [],
  films: []
}

const reducer = (state: IState = initialState, action: any) : IState => {
  switch (action.type) {
    case actionTypes.FETCHED_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    case actionTypes.FETCHED_FILMS:
      return {
        ...state,
        films: action.payload,
      };
    case actionTypes.FILM_TOGGLE_FAV:
      const filmIndex = state.films.findIndex(
        p => p.episode_id === action.payload
      );

      const newFavoriteStatus = !state.films[filmIndex].isFavorite;
      const updatedFilms = [...state.films];
      updatedFilms[filmIndex] = {
        ...state.films[filmIndex],
        isFavorite: newFavoriteStatus
      };

      return {
        ...state,
        films: updatedFilms
      };
    default:
      return state;
  }
};

export default reducer;
