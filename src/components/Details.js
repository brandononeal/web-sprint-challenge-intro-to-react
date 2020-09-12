import React from "react";

export default function Details(props) {
  const { character } = props;

  return (
    <div className="details-container">
      <h3>Status: {character.status}</h3>
      <h3>Gender: {character.gender}</h3>
      <h3>Species: {character.species}</h3>
      <h3>Origin: {character.origin.name}</h3>
      <h3>Location: {character.location.name}</h3>
    </div>
  );
}
