import React from 'react'

class Square extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        value: null,
      };
    }
    
    render() {
      return (
        <button 
          className="square" 
          onClick={() => this.setState({value: 'O'})}
          >
            {this.state.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    
    constructor(props){
        super(props);

        let boardStates = []
        
        for(let i = 0; i < 6; i++){
            let rowStates = []
            for(let j = 0; j < 7; j++){
                rowStates.push('0')
            }
            boardStates.push(rowStates)
        }

        this.state = {
            states: boardStates,
        }
    }

    handleClick(){

    }
    
    renderSquare(i) {
      return <Square value={i} onClick={this.handleClick}/>;
    }

    getRow(board ,i){
        return board[i];
    }
    
    render() {

        let board = []
        
        for (let r = 0; r < 6; r++) {
            let row = [];
            for (let c = 0; c < 7; c++) { 
                row.push(this.renderSquare())
            }
            board.push(row);
        }

      return (
        <div>
          <div className="board-row">
            {this.getRow(board, 0)}
          </div>
          <div className="board-row">
            {this.getRow(board, 1)}
          </div>
          <div className="board-row">
            {this.getRow(board, 2)}
          </div>
          <div className="board-row">
            {this.getRow(board, 3)}
          </div>
          <div className="board-row">
            {this.getRow(board, 4)}
          </div>
          <div className="board-row">
            {this.getRow(board, 5)}
          </div>
        </div>
      );
    }
  }

export default function Game()
{

    return (
        <div className="game-root">
            <div className="game-board">
                <Board>

                </Board>
            </div>
        </div>
    )

    
}