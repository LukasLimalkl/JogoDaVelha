let jogador = '';
let stateG = ['', '', '', '', '', '', '', '', ''];
let texto = document.querySelector("p");
let message = document.querySelector(".message");
let sombra = document.querySelector(".hide")


const boxes = document.querySelectorAll(".box");

const clickBox = (jogada, i, event) =>{
    event.target.classList.add(jogada);
    stateG[i] = jogador;
    checkWinner();
}

const checkWinner = () => {
    const winningCombos = [
      
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
     
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (stateG[a] && stateG[a] === stateG[b] && stateG[b] === stateG[c]) {
          message.style.display ="flex";
          texto.textContent = `O jogador ${stateG[a]} ganhou! `;  
        }else{
            
        }
      }
}
// CLICKAR NAS BOXS
boxes.forEach((box, i) => {
  box.addEventListener("click", event => {

    sombra.classList.remove("circle")
    sombra.classList.remove("x")
    
    if(jogador ==='X'){
        sombra.classList.add("x")
        jogador = 'O';
        jogada = 'circle'

    }else{
        sombra.classList.add("circle")
        jogador = 'X'
        jogada = 'x'
    }
    clickBox(jogada,i, event);
    checkWinner();
  });
});

function resetar (){
    location.reload()
}