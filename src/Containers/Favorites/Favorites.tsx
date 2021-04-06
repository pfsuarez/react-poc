import { useSelector } from "react-redux";
import { film, IState } from "../../store/Interfaces/DataTypes";
import FavoriteFilmItem from "../../Components/Item/FavoriteFilmItem";

const Favorites = (props: any) => {
  const favoriteFilms = useSelector<IState, film[]>((state) =>
    state.films.filter((x: film) => x.isFavorite)
  );

  let content = <p className="placeholder">No favorites yet!</p>;

  if (favoriteFilms.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteFilms.map((film) => (
          <FavoriteFilmItem {...film} key={film.episode_id} />
        ))}
      </ul>
    );
  }

  return content;
};

export default Favorites;
