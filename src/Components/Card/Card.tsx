import React from "react";
import styled, { CSSProperties } from "styled-components";

interface CardProps {
  style: CSSProperties;
  children: any;
}

const Card = (props: CardProps) => {
  const Card = styled.div`
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  `;

  return <Card style={props.style}>{props.children}</Card>;
};

export default Card;
