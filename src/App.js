import React, { Component } from "react";
import "./App.css";
import Star from './Star'

class App extends Component {

  state = {
  stars: stars,
}

  render() {
    return (
      <div className="game_wrapper">
        <h1>Speed Game</h1>
        <h3>
          Your score is :<span id="score">0</span>
        </h3>
        <div>
        <Star />
        </div>
        <button>Start Game</button>
        <button>End Game</button>
      </div>
    );
  }
}

export default App;
