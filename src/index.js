import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const numbers = [...Array(9).keys()].map(i => ++i)
const size = 9;
var tbl = new Array(size);
for(let y = 0; y < size; y++) {
  tbl[y] = new Array(size).fill(0);
}

class Square extends React.Component {
    render() {
      return (
        <button className="square">
          {this.props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i}/>;
    }
  
    render() {
      const status = 'Next player: X';
      const line = [];
      for (let i = 0; i < size; i += 1) {
        for(let j = 0; j< size; j +=1){
          line.push(this.renderSquare(tbl[i][j]));
        }
      }

  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {line}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  