export interface character {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  isFavorite: boolean;
}

export interface film {
  title: string;
  director: string;
  episode_id: string;
  isFavorite: boolean;
}

export interface IState {
  characters: character[];
  films: film[];
}
