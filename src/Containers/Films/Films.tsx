import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { IState, film } from "../../store/Interfaces/DataTypes";
import FilmItem from "../../Components/Item/FilmItem";
import { FilmToggleFav } from "../../store/Actions/App";

const Films = (props: any) => {
  const films: film[] = useSelector<IState, film[]>((state) => state.films);
  const dispatch = useDispatch();
  const onToggleFav = (episodeId: string) => dispatch(FilmToggleFav(episodeId));

  const Ul = styled.ul`
    list-style: none;
    margin: 3rem;
    padding: 0;
  `;

  const onToggleFavHandler = (episodeId: string) => {
    onToggleFav(episodeId);
  };

  return (
    <Ul>
      {films.map((film) => (
        <FilmItem
          {...film}
          key={film.episode_id}
          onToggleFav={() => onToggleFavHandler(film.episode_id)}
        />
      ))}
    </Ul>
  );
};

export default Films;
