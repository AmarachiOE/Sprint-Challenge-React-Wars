import React from "react";
import "./Characters.css";

const Character = props => {
  return (
    <div className="character-card">
        <h2>{props.characterProp.name}</h2>
        <p><strong>Birth Year:</strong> {props.characterProp.birth_year}</p>
        <p><strong>Gender:</strong> {props.characterProp.gender}</p>
        <p><strong>Eye Color:</strong> {props.characterProp.eye_color}</p>
    </div>
  );
};

export default Character;

// import this file on CharacterList.js

/*
${props.characterProp.remove ? "removed" : ""}`} onClick={() => props.toggleCharacter(props.studentProp.created)}
*/ 