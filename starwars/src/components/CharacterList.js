import React from 'react';

import Character from "./Character";

const CharacterList = props => {
 return(
     <div>
         {/* map over each item in starwarsChars (under the state object)
        starwarsChars is passed down to CharacterList as a prop */}
        {props.starwarsChars.map(character => (
          <Character 
          key={character.created}
          characterProp={character}
          />  
        ))}
         
     </div>
 )
};

export default CharacterList;

// import file on App.js