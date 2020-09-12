import React, { useState } from "react";
import styled from "styled-components";
import Details from "./Details";

const StyledDetails = styled.div`
  color: ${(pr) => pr.theme.secondaryColor};
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  button {
    margin-bottom: 5%;
  }
`;

export default function Character(props) {
  const { character } = props;
  const [showDetails, setShowDetails] = useState(false);
  function onClick() {
    setShowDetails((showDetails) => !showDetails);
  }

  return (
    <StyledDetails>
      <div className="characters-container">
        <img src={character.image} alt={character.name}></img>
        <h2>{character.name}</h2>
        <button onClick={onClick}>Details</button>
        {showDetails ? <Details character={character} /> : null}
      </div>
    </StyledDetails>
  );
}
