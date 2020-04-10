import React from 'react'

function Square(props) {
  return (
    <button className={props.color} onClick={props.onClick}>
      {props.value}
    </button>
  );
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
            player1: true,
        }
    }

    handleClick(r,c){
      for(var i = 5; i >= 0; i--){
        if(this.state.states[i][c] == '0'){
          var newStates = this.state.states
          if(this.state.player1){
            newStates[i][c] = '1'
          }
          else {
            newStates[i][c] = '2'
          }
          this.setState({states: newStates})
          this.setState({player1: !this.state.player1})
          return
        }
      }
    }
    
    renderSquare(r,c) {
      var squareValue = null;
      var squareColor = null;
      if(this.state.states[r][c] == '0'){
        squareValue = " "
        squareColor = "square"
      }
      else if(this.state.states[r][c] == '1'){
        squareValue = "O"
        squareColor = "red-square"
      }
      else if(this.state.states[r][c] = '2'){
        squareValue = "O"
        squareColor = "yellow-square"
      }
        
      return <Square value={squareValue} onClick={() => this.handleClick(r,c)} color={squareColor}/>;
    }

    getRow(board ,i){
        return board[i];
    }
    
    render() {

        let board = []
        
        for (let r = 0; r < 6; r++) {
            let row = [];
            for (let c = 0; c < 7; c++) { 
                row.push(this.renderSquare(r, c))
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