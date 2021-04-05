import styled from "styled-components";
import { film } from "../../store/Reducers/App";
import Card from "../Card/Card";

const FavoriteFilmItem = (props: film) => {
  const H2 = styled.h2`
    font-size: 1.15rem;
    margin: 0.25rem 0;
  `;

  const P = styled.p`
    margin: 0.25rem 0;
  `;

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div>
        <H2>{props.title}</H2>
        <P>Director: {props.director}</P>
      </div>
    </Card>
  );
};

export default FavoriteFilmItem;
