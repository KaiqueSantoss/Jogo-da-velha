document.addEventListener('DOMContentLoaded',()=>{


    let squares = document.querySelectorAll('.square')
    let resetBoard = document.getElementById('reset')
    let resetScore = document.getElementById('resetScore')
    let resetAll = document.getElementById('resetAll')

    resetAll.addEventListener('click',reset_All)
    resetScore.addEventListener('click', clearScoreBoard)
    resetBoard.addEventListener('click',clearBoard)
    squares.forEach((square)=>{
        square.addEventListener('click',handleMove)
        
    })
})
          

   function handleMove(e){
    let square = e.target
    let position = square.id

    if(PlayerMove(position)){
        setTimeout(()=>{
            if(playerTime == 0){
                alert(" 🌕 O jogador 1 Ganhou 🌕 "+ " \n "+ "        Fim de jogo         ")
                scoreBoard()
            }else{
                alert(" 🛰️ O jogador 2 Ganhou 🛰️ "+ "\n"+ "        Fim de jogo         ")
                scoreBoard()
            }},10)
    }



    updateSquare(position)

   }

   function updateSquare(position){
    let square = document.getElementById(position.toString())
    let signal = board[position]

    if(signal !== ''){
        square.innerHTML = `<div class ="${signal}"> </div>`
    }
   }
   
   function clearBoard(){
     let classX = document.querySelectorAll('.x')
      

     classX.forEach((x)=>{
       x.remove()
     })

     let classO = document.querySelectorAll('.o')

     classO.forEach((o)=>{
        o.remove()
     })

     resetGame()
   }

   function clearScoreBoard(){
    let score0 = document.getElementById('ponto1')
    let score1 = document.getElementById('ponto2')
    score0.innerText ='Pontos:0'
    score1.innerText ='Pontos:0'
    scoreReset()
   }

   function reset_All(){
    clearScoreBoard()
    clearBoard()
   }


   function scoreBoard(){
    let score0 = document.getElementById('ponto1')
    let score1 = document.getElementById('ponto2')
    if(playerTime == 0){
    score0.innerText =`Pontos: ${++pts1}` }
    else{
    score1.innerText =`Pontos: ${++pts2}`}
   }



 
   

