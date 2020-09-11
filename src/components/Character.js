import React from "react";
import styled from "styled-components";

const StyledDetails = styled.div`
  color: ${(pr) => pr.theme.secondaryColor};
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.5rem;
  }
`;

export default function Character(props) {
  const { character } = props;

  return (
    <StyledDetails>
      <div className="characters-container">
        <img src={character.image} alt={character.name}></img>
        <h2>Name: {character.name}</h2>
        <h3>Status: {character.status}</h3>
        <h3>Gender: {character.gender}</h3>
        <h3>Species: {character.species}</h3>
        <h3>Origin: {character.origin.name}</h3>
        <h3>Location: {character.location.name}</h3>
      </div>
    </StyledDetails>
  );
}
