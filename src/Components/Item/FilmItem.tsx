import Card from "../Card/Card";
import { film, character } from "../../store/Interfaces/DataTypes";
import styled from "styled-components";

interface FilmItemProps extends film {
  onToggleFav: any
};

const FilmItem = (props: FilmItemProps) => {
  
  const Title = styled.h2`
    font-size: 1.15rem;
    margin: 0.25rem 0;
  `;

  const P = styled.p`
    margin: 0.25rem 0;
  `;

  const Button = styled.a`
  
  `;

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div>
        <Title>{props.title}</Title>
        <P>Episode: {props.episode_id}</P>
        <P>Director: {props.director}</P>
        <button
          className={!props.isFavorite ? "button-outline" : ""}
          onClick={props.onToggleFav}
        >
          {props.isFavorite ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
};

export default FilmItem;
