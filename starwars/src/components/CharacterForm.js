import React from 'react';
import "./Characters.css";

const CharacterForm = props => {
    return(
        <form>
            <input
            name="name"
            value={props.name}
            onChange={props.handleChanges}
            placeholder="Name of new character"
            />
            <input
            name="birth_year"
            value={props.birth_year}
            onChange={props.handleChanges}
            placeholder="When was this character born?"
            />
            <input
            name="gender"
            value={props.gender}
            onChange={props.handleChanges}
            placeholder="What is this character's gender?"
            />
            <input
            name="eye_color"
            value={props.eye_color}
            onChange={props.handleChanges}
            placeholder="What color are their eyes?"
            />
            <button onClick={props.updateList}>Add New Character</button>
        </form>
    );
};

export default CharacterForm;

// import this file on App.js


/*

      name: "",
      birthYear: "",
      gender: "",
      eyeColor: "",
*/