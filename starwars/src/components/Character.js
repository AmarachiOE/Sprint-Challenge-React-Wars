import React from "react";

const Character = props => {
  return (
    <div className="character-card">
        <h2>{props.characterProp.name}</h2>
        <p>Birth Year: {props.characterProp.birth_year}</p>
        <p>Gender: {props.characterProp.gender}</p>
        <p>Eye Color: {props.characterProp.eye_color}</p>
    </div>
  );
};

export default Character;

// import this file on CharacterList.js
