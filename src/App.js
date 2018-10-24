import React, { Component } from 'react';
import './App.css';

import Wrapper from "./components/Wrapper/Wrapper.js";
import Nav from "./components/nav/Nav"
import Cards from "./components/AnimeCard/AnimeCard";
import Footer from "./components/footer/Footer";
import anime from "./anime.json";


class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    anime,
    showCharacters: true
  }

  click = id => {
    this.state.anime.find((element, i) => {
      if (element.id === id) {
        if (anime[i].count === 0) {
          anime[i].count = + 1
          let newScore = this.state.score + 1
          this.setState(
            {
              score: newScore
            }
          )
          this.shuffle()
          return true;
        }
        else {
          this.gameOver();
        }
      }
    });
  }

  shuffle = () => {
    this.state.anime.sort(() => Math.random() - 0.5)
  }

  gameOver = () => {
    if (this.state.score > this.state.topScore) {
      this.setState(
        {
          topScore: this.state.score,
          score: 0
        }
      )
      this.state.anime.forEach(anime => {
        anime.count = 0
      })
    }
    alert(`Game Over!`)
    this.shuffle();
  }


  render() {

    let anime = null;

    if (this.state.showCharacters) {
      anime = (
        <div>
          {this.state.anime.map((anime) => {
            return <Cards
              image={anime.image}
              id={anime.id}
              key={anime.id}
              click={this.click}
            />
          })}
        </div>
      )
    }

    return (
      <Wrapper>
        <Nav
          score={this.state.score}
          topScore={this.state.topScore} />
        {anime}
        <Footer />
      </Wrapper>
    );
  }
}


  export default App;
