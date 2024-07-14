let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let msg=document.querySelector(".msg");
let msgcont=document.querySelector('.msg-cont');
let newgame=document.querySelector('.new-game');
let resetbtn=document.querySelector("#reset");


const winArr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turn_O = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("btn clicked");
    if (turn_O) {
      box.innerText = "X";
      turn_O = false;
    } else {
      box.innerText = "O";
      turn_O = true;
    }
    box.disabled = true;

    checkWinner();
  });
});


const showWinner=(winner)=>{
    msg.innerText=`Congratulations !!! the winner issssss... "${winner}" 😉😉😉😎`;
    msgcont.classList.remove("hide");
    newgame.classList.remove("hide");

    disableGame();
 
}

const disableGame =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableGame =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    
};

const resetGame=()=> {
    turn_O=true;
    enableGame();
    msgcont.classList.add("hide");
    newgame.classList.add("hide");
};

let count=0;

const checkWinner = () => {
  let flag=false;
  for (let pattern of winArr) {
    let p1 = boxes[pattern[0]].innerText;
    let p2 = boxes[pattern[1]].innerText;
    let p3 = boxes[pattern[2]].innerText;

    if (p1 != "" && p2 != "" && p3 != "") {
      if (p1 == p2 && p2 == p3) {
        console.log("winner", p1);
        showWinner(p1);
        flag=true;
        break;
      }
    }
  }
  if(!flag){count++;}
  if(count == 9) {
    msg.innerText="Nobody Wins! Try Again. 😒😒😒";
    msgcont.classList.remove("hide");
    newgame.classList.remove("hide");

    disableGame();
  }
};


newgame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);



let scoreO = 0;
let scoreX = 0;
let scoreOElement = document.querySelector(".score-O");
let scoreXElement = document.querySelector(".score-X");

 showWinner = (winner) => {
  msg.innerText = `Congratulations !!! the winner issssss... "${winner}" 😉😉😉😎`;
  msgcont.classList.remove("hide");
  newgame.classList.remove("hide");
  disableGame();
  
  if (winner === "😎") {
    scoreO++;
  } else {
    scoreX++;
  }
  updateScore();
};

const updateScore = () => {
  scoreOElement.innerText = `Player 😎: ${scoreO}`;
  scoreXElement.innerText = `Player 😒: ${scoreX}`;
};
