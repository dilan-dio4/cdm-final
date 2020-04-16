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
            gameOver: false,
            winner: 'none',
        }
    }

    handleClick(c){
      if(!this.state.gameOver){
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
        
      return <Square value={squareValue} onClick={() => this.handleClick(c)} color={squareColor}/>;
    }

    getRow(board ,i){
      return board[i];
    }

    checkWin(){
      
      let currentStates = this.state.states
      //check horizontal win
      for(let r = 0; r < 6; r++){
        for(let c = 0; c < 4; c++){
          if(currentStates[r][c] == '1' && currentStates[r][c+1] == '1' && currentStates[r][c+2] == '1' && currentStates[r][c+3] =='1'){
            this.setState({winner: "Player 1"})
            this.setState({gameOver: true})
            return 
          }
          else if(currentStates[r][c] == '2' && currentStates[r][c+1] == '2' && currentStates[r][c+2] == '2' && currentStates[r][c+3] =='2'){
            this.setState({winner: "Player 2"})
            this.setState({gameOver: true})
            return 
          }
        }
      }

      //check vertical win
      for(let r = 0; r < 3; r++){
        for(let c = 0; c < 7; c++){
          if(currentStates[r][c] == '1' && currentStates[r+1][c] == '1' && currentStates[r+2][c] == '1' && currentStates[r+3][c] =='1'){
            this.setState({winner: "Player 1"})
            this.setState({gameOver: true})
            return 
          }
          else if(currentStates[r][c] == '2' && currentStates[r+1][c] == '2' && currentStates[r+2][c] == '2' && currentStates[r+3][c] =='2'){
            this.setState({winner: "Player 2"})
            this.setState({gameOver: true})
            return 
          }
        }
      }

      //check diagonal right 
      for(let r = 3; r < 6; r++){
        for(let c = 0; c < 4; c++){
          if(currentStates[r][c] == '1' && currentStates[r-1][c+1] == '1' && currentStates[r-2][c+2] == '1' && currentStates[r-3][c+3] =='1'){
            this.setState({winner: "Player 1"})
            this.setState({gameOver: true})
            return 
          }
          else if(currentStates[r][c] == '2' && currentStates[r-1][c+1] == '2' && currentStates[r-2][c+2] == '2' && currentStates[r-3][c+3] =='2'){
            this.setState({winner: "Player 2"})
            this.setState({gameOver: true})
            return 
          }
        }
      }

      //check diagonal left
      for(let r = 3; r < 6; r++){
        for(let c = 3; c < 7; c++){
          if(currentStates[r][c] == '1' && currentStates[r-1][c-1] == '1' && currentStates[r-2][c-2] == '1' && currentStates[r-3][c-3] =='1'){
            this.setState({winner: "Player 1"})
            this.setState({gameOver: true})
            return 
          }
          else if(currentStates[r][c] == '2' && currentStates[r-1][c-1] == '2' && currentStates[r-2][c-2] == '2' && currentStates[r-3][c-3] =='2'){
            this.setState({winner: "Player 2"})
            this.setState({gameOver: true})
            return 
          }
        }
      }

      return
    }

   
    newGame(){
      let boardStates = []
        
      for(let i = 0; i < 6; i++){
          let rowStates = []
          for(let j = 0; j < 7; j++){
              rowStates.push('0')
          }
          boardStates.push(rowStates)
      }

      this.setState({states: boardStates,player1: true,gameOver: false,winner: 'none'})
     
  
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

      if(!this.state.gameOver)
        this.checkWin()
      
        let message = ""
      if(!this.state.gameOver){
        message = "It's " + (this.state.player1 ? "player 1's" : "player 2's") + " turn"
      }
      else
        message = this.state.winner + " wins!"

      return (
        <div>
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

          <div>
            {message}
          </div>

          <button className="new-game" onClick={() => this.newGame()}>
            New Game
          </button>
        </div>

      );
    }
  }



export default function Game()
{

    return (
        <div className="game-root">
            <div className="game-board">
                <Board></Board>
            </div>
        </div>
    )

    
}