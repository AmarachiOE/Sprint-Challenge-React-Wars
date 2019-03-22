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
        handleChanges={this.handleChanges}/>
      </div>
    );
  }
}

export default App;
