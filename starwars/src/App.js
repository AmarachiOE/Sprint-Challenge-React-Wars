import React, { Component } from 'react';
import './App.css';

import CharacterList from "./components/CharacterList";
import CharacterForm from "./components/CharacterForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      name: "",
      birth_year: "",
      gender: "",
      eye_color: "",
    };
  }

  handleChanges = event => {
    console.log("event:", event.target);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // for adding NEW characters
  updateList = event => {
    event.preventDefault(); // no refreshing

    const newCharacter = {
      name: this.state.name,
      birth_year: this.state.birth_year,
      gender: this.state.gender,
      eye_color: this.state.eye_color,
      created: Date.now(),
      remove: false 
    };

    this.setState({
      starwarsChars: [...this.state.starwarsChars, newCharacter]
    });

  };

  // toggleCharacter = created => {
  //   this.setState({
  //     starwarsChars: this.state.starwarsChars.map( character => {
  //       if (character.created === created) {
  //         return {
  //           ...character,
  //           remove: !character.remove
  //         };
  //       }
  //       return character;
  //     })
  //   });
  // };

  // clearRemoved = event => {
  //   event.preventDefault();

  //   const remainingCharacters =
  //   this.state.starwarsChars.filter( character => {
  //     return !character.remove === true;
  //   });

  //   this.setState({ starwarsChars: remainingCharacters });
  // };

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList 
        starwarsChars={this.state.starwarsChars}
        />
        <CharacterForm 
        name={this.state.name}
        birth_year={this.state.birth_year}
        gender={this.state.gender}
        eye_color={this.state.eye_color}
        handleChanges={this.handleChanges}
        updateList={this.updateList}/>
      </div>
    );
  }
}

export default App;
