import React, { Component } from 'react';
import './App.css';

import Nav from "./components/nav/Nav"
import Cards from "./components/AnimeCard/AnimeCard";
import Footer from "./components/footer/Footer";
import anime from "./anime.json";


class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    animeCharacters: anime,
    showCharacters: true
  }
 
  render() {

    let animeCharacters = null;

    if (this.state.showCharacters) {
      animeCharacters = (
        <div>
          {this.state.animeCharacters.map((anime) => {
            return <Cards
              image={anime.image}
              key={anime.id} 
               />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <Nav 
        score={this.state.score}
        topScore={this.state.topScore}/>
        {animeCharacters}
        <Footer />
      </div>
    );
  }
}

export default App;
