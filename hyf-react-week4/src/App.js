import React, { Component } from 'react';

import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      trun: 'X',
      gameEnded: false,
      winner: undefined,
      board: Array(9).fill(''),
      totalMoves:0
    }
  }

  clicked(event){
    if(this.state.board[event.target.dataset.square] ==  '') {
    this.state.board[event.target.dataset.square] = this.state.turn;
    console.log(event.target);
    event.target.innerText= this.state.turn;
    this.setState({
      turn: this.state.turn == 'X' ?  'O' : 'X',
      board: this.state.board,
      totalMoves: this.state.totalMoves ++
    })
  }

   var result= this.checkWinner();
   if(result == 'X') {
     this.setState({
      gameEnded: true,
      winner: 'X',
      winnerLine: 'Match won by X'
     });
     console.log('Yesssssssssss');
   } else if( result == 'O'){
    this.setState({
      gameEnded: true,
      winner: 'O',
      winnerLine: 'Match won by O'
   });
   
   } else if(result =='draw'){
     this.setState({
       gameEnded: true,
       winner: 'draw ',
       winnerLine: 'Match is drawn'
     })
   }
}

  checkWinner() {
    var moves = [[0,3,6], [1,4,6], [2,5,8], [0,4,8], [2,4,6], [0,1,2], [3,4,5], [6,7,8]],
    board = this.state.board;
    for( let i=0;i<moves.length; i++){
      if(board[moves[i][0]] ==  board[moves[i][1]] && board[moves[i] [1]] == board[ moves [i] [2]])
      return board[moves[i][0]];
    }

    if (this.state.totalMoves == 9){
      return 'draw';
    }
  }

  render() {
    return (
      <div id='game'>
      <div id='status'>{this.state.winnerLine} </div>
      <div id='head'>My first React game</div>

      <div id='board' onClick={(e)=>this.clicked(e)}>
       
       <div className='square' data-square='0'></div>
       <div className='square' data-square='1'></div>
       <div className='square' data-square='2'></div>
       <div className='square' data-square='3'></div>
       <div className='square' data-square='4'></div>
       <div className='square' data-square='5'></div>
       <div className='square' data-square='6'></div>
       <div className='square' data-square='7'></div>
       <div className='square' data-square='8'></div>
       
       
      </div>
      
      </div>
      
    );
  }
}

export default App;
