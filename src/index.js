import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const size_ = 3;
var data = [
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,0,8,9],
  [1,2,3,4,5,6,7,8,0],
  [1,2,3,0,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,5,4,5,6,0,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
]
/*
var data = new Array(size);
for(let y = 0; y < size; y++) {
  data[y] = new Array(size).fill(0);
}
*/
console.log(data);

  class Square extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }
    render() {
      var value = this.props.value? this.props.value : "";
      return (
        <button 
          className="square" 
          onClick={() => this.setState({value: 'X'})}
        >
          {this.state.value}
        </button>
      );
    }
  }

  class Boxes extends React.Component {
    render() {
      var rows = [];
      for(var i=0; i<size_; i++){
        rows.push(<BoxRow boxRowIndex={i} data={this.props.data}/>)
      }
      return (rows);
    }
  }

  class BoxRow extends React.Component {
    render() {
      var boxes = [];
      var boxRowIndex = this.props.boxRowIndex;
      for(var i=0; i<size_; i++){
        boxes.push(<Box row={boxRowIndex} column={i} data={this.props.data}/>)
      }
      return(
        <div className="box-row">
          {boxes}
        </div> 
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
          boxRow.push(data[size_*row+i][size_*column+j]);
        }
        box.push(boxRow);
      }
      return (
        <div className="box">
          <Squares data={box} />
        </div>
      );
    }
  }

  class SquareRow extends React.Component {
    render() {
      var squares = [];
      var data = this.props.data;
      var squaresSize = data[0].length;
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
      for(var i=0; i<size_; i++){
        rows.push(<SquareRow rowIndex={i} data={data}/>)
      }
      return (rows);
    }
  }

  class Board extends React.Component {
    render() {
      const status = 'Next player: X';

  
      return (
        <div>
          <div className="status">{status}</div>
          <Boxes data={this.props.data} />
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
  