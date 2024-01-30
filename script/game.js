
let board = ['','','','','','','','',''];

let playerTime = 0;

let Signal =['o','x'];

let GameOver = false;    

let pts1 = 0;
let pts2 = 0;

let gameWin = [[0,1,2],
               [3,4,5],
               [6,7,8],
               [0,3,6],
               [1,4,7],
               [2,5,8],
               [0,4,8],
               [2,4,6]
             ]


function PlayerMove(position){


    if(GameOver){
    
        return 
        
    }
  



    if(board[position] == ''){
    board[position] =  Signal[playerTime]

    GameOver = gameState()
    console.log(GameOver)

    if(GameOver == false){    

   playerTime = (playerTime == 0)? 1:0;}
}

return GameOver

}

function gameState(){

for(let i = 0; i < gameWin.length; i++){
    let seq = gameWin[i]
    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];


    if(board[pos1]  == board[pos2]  && board[pos1]  == board[pos3]   &&   board[pos1] !== ''){
        console.log(board[pos2],board[pos3],board[pos1])
        return true;
    }
    
}
return false;


}

function resetGame(){
 board = ['','','','','','','','',''];

 playerTime = 0;




 GameOver = false;   

 return board, playerTime, GameOver
}

function scoreReset(){
    pts1 = 0;
    pts2 = 0;

    return pts1, pts2

}