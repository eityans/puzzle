import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const numbers = [...Array(9).keys()].map(i => ++i)
const size_ = 3;
const size = size_*size_;
var data = new Array(size);
for(let y = 0; y < size; y++) {
  data[y] = new Array(size).fill(0);
}
console.log(data);

  class Square extends React.Component {
    render() {
      return (
        <button className="square">
          {this.props.value}
        </button>
      );
    }
  }

  class Box extends React.Component {
    render() {
      var row = this.props.row;
      var column = this.props.column;
      var box = [];
      var data = this.props.data;
      for(var i=0; i<size_; i++){
        var boxRow = [];
        for(var j=0; j<size_; j++){
          boxRow.push(data[row][column]);
        }
        box.push(boxRow);
      }
      return (
        <Squares data={box} />
      );
    }
  }

  class SquareRow extends React.Component {
    render() {
      var squares = [];
      var data = this.props.data;
      var squaresSize = size;
      var rowIndex = this.props.rowIndex
      for(var i=0; i<squaresSize; i++){
        squares.push(<Square value={data[rowIndex][i]} />);
      }
      return(
        <div className="board-row">
          {squares}
        </div>);
    }
  }
  
  class Squares extends React.Component {
    render() {
      var rows = [];
      var data = this.props.data;
      var rowsSize = data.length;
      for(var i=0; i<rowsSize; i++){
        rows.push(<SquareRow rowIndex={i} data={data}/>)
      }
      return (rows);
    }
  }

  class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i}/>;
    }
  
    render() {
      const status = 'Next player: X';

  
      return (
        <div>
          <div className="status">{status}</div>
          <Squares data={this.props.data} />
          <Box row={0} column={0} data={this.props.data}/>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board data={data}/>
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
  