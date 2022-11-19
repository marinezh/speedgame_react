import React, { Component } from "react";
import "./App.css";
import GameOver from "./GameOver";
import Star from "./Star";

import click from './assets/click_sound.ogg';
import endSound from './assets/game_over.wav'
import startSound from "./assets/game_start.ogg"


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// let clickSound = new Audio(click);

class App extends Component {
  state = {
    score: 0,
    stars: [1, 2, 3, 4, 5],
    pace: 1000,
    gameOver: false,
    gameOn: false,
    current: undefined,
    startButtonActive: true,
    endButtonActive: false,
    rounds: 0,
  };

  timer;

  toggleButtons = () => {
    this.setState({ startButtonActive: !this.state.startButtonActive });
    this.setState({ endButtonActive: !this.state.endButtonActive });
  };

  clickHandler = (i) => {
    // clickSound.play()

    let clickSound = new Audio(click)
    clickSound.play();

    if (this.state.current !== i) {
      return this.stopHandler();
    }

    console.log("was clicked", i);
    this.setState({
      score: this.state.score + 10,
      rounds: 0,
    });

    

  };

  nextStar = () => {
    if (this.state.rounds >= 3) {
      this.stopHandler();
      return;
    }

    let nextActive;

    do {
      nextActive = getRndInteger(0, this.state.stars.length - 1);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
      // pace: this.state.pace * 0.95,
      rounds: this.state.rounds + 1,
      // rounds: 0,
    });

    console.log(nextActive);
    console.log(this.state.current);
    this.timer = setTimeout(this.nextStar, this.state.pace);
    console.log("rounds", this.state.rounds);
  };

  startHandler = () => {
    let gameStartSound = new Audio(startSound);
    gameStartSound.play();
    console.log("start clicked");
    this.toggleButtons();
    this.nextStar();
    this.setState({gameOn: !this.state.gameOn})
  };

  stopHandler = () => {
    let gameOverSound = new Audio(endSound)
    gameOverSound.play();
    console.log("stop clicked");
    this.toggleButtons();
    clearTimeout(this.timer);
    this.setState({ gameOver: true });
  };

  closeHandler = () => {
    // this.setState({ gameOver: !this.state.gameOver });
    window.location.reload();
    console.log("fff");
  };

  render() {
    return (
      <div className="game_wrapper">
        <h1>Speed Game</h1>
        <h3>
          Your score is : <span id="score">{this.state.score}</span>
        </h3>
        <div className="stars">
          {/* <Star />
          <Star />
          <Star />
          <Star />
          <Star /> */}

          {this.state.stars.map((star, i) => (
            <Star
              key={i}
              id={i + 1}
              gameStatus={this.state.gameOn}
              click={() => this.clickHandler(i)}
              active={this.state.current === i}
            />
          ))}
        </div>
        {this.state.startButtonActive && (
          <button onClick={this.startHandler}>Start Game</button>
        )}
        {this.state.endButtonActive && (
          <button onClick={this.stopHandler}>End Game</button>
        )}

        {this.state.gameOver && (
          <GameOver score={this.state.score} close={this.closeHandler} />
        )}


      </div>
    );
  }
}

export default App;
