import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "./constants";
import Character from "./components/Character";
import "./App.css";

const StyledTitle = styled.div`
  width: 85%;
  margin: 0 auto;
  h1 {
    color: ${(pr) => pr.theme.primaryColor};
    font-size: 2.5rem;
  }
`;

const App = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        setCharacter(res.data.results);
      })
      .catch((err) => {
        debugger;
      });
  }, []);

  return (
    <StyledTitle>
      <div className="App">
        <h1 className="Header">Characters</h1>
        {character.map((characterObject) => {
          return <Character character={characterObject} />;
        })}
      </div>
    </StyledTitle>
  );
};

export default App;
