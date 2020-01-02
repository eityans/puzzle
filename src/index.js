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
    render() {
      var value = this.props.value? this.props.value : "";
      return (
        <button 
          className="square" 
          onClick={this.props.onClick}
        >
          {value}
        </button>
      );
    }
  }

  class Boxes extends React.Component {
    render() {
      var rows = [];
      for(var i=0; i<size_; i++){
        rows.push(
          <BoxRow 
            key={i}
            boxRowIndex={i} 
            data={this.props.data}
            onClick={this.props.onClick}
          />
        );
      }
      return (rows);
    }
  }

  class BoxRow extends React.Component {
    render() {
      var boxes = [];
      var boxRowIndex = this.props.boxRowIndex;
      for(var i=0; i<size_; i++){
        boxes.push(
          <Box 
            key={i}
            row={boxRowIndex} 
            column={i} 
            data={this.props.data}
            onClick={this.props.onClick}
          />
        );
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
          <Squares data={box}  onClick={this.props.onClick}/>
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
        squares.push(
          <Square 
            key={i}
            value={data[rowIndex][i]} 
            onClick={this.props.onClick}
          />
        );
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
        rows.push(
          <SquareRow 
            key={i}
            rowIndex={i} 
            data={data}
            onClick={this.props.onClick}
          />
        );
      }
      return (rows);
    }
  }

  class Board extends React.Component {
    constructor(props){
      super(props);  
      this.state = {
        data: data,
      }
    }

    handleClick = () => {
      const data = JSON.parse(JSON.stringify(this.state.data));
      data[0][0]++;
      console.log("(っ＾ω＾ｃ)");
      console.log(data);
      this.setState({data: data});
    }

    render() {
      const status = 'Next player: X';

  
      return (
        <div>
          <div className="status">{status}</div>
          <Boxes data={this.state.data} onClick={this.handleClick}/>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board/>
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
  