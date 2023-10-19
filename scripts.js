//seleciona os elementos
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.querySelector("[data-board]")
let isCircleTurn = false;
//Vetor que armazena as combinacoes vitoriosas
const WinningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
const startgame = () =>{

}
//Funcao que adiciona classes aos objetos
const placeMark = (cell,classToAdd)=>{
    cell.classList.add(classToAdd);
}
const CheckGameOver = (currentPlayer) =>{
    return WinningConditions.some(combination)
}
const SwapTurns = () =>{
    isCircleTurn = !isCircleTurn;
    board.classList.remove('O');
    board.classList.remove('X');
    if(isCircleTurn)
    {
      board.classList.add('O');
    }
    else
    {
      board.classList.add('X');
    }
}
//funcao que sera acionada ao clicar
const handleClick = (e) => {
  const cell = e.target;
  const classToAdd = isCircleTurn ? 'O':'X';
  placeMark(cell,classToAdd);
  SwapTurns();
}
for(const cell of cellElements){
    cell.addEventListener("click", handleClick,{once:true});
}