const btn = document.querySelectorAll(".btn");
let player1 = true;
let player2 = false;
let player1Arr = [];
let player2Arr = [];
const winningComb = [[11,12,13],[21,22,23],[31,32,33],[11,21,31],[12,22,32],[13,23,33],[11,22,33],[13,22,31]];

btn.forEach((ele) => ele.addEventListener("click",(e) => clickFn(e) ));

function clickFn(e) {
  if(player1){
    if(e.target.innerText == false){
      e.target.innerText = "O";
      player1Arr.push(parseInt(e.target.attributes[0].value));
      player1 = false;
      player2 = true;
      winningComb.forEach(cmpFn1);
    }
    
  }
  else if(player2){
    if(e.target.innerText == false){
      e.target.innerText = "X";
      player2Arr.push(parseInt(e.target.attributes[0].value));
      player2 = false;
      player1 = true;
      winningComb.forEach(cmpFn2);
    }  
  }
}

function cmpFn1(item){  
  if(item.every( ai => player1Arr.includes(ai))){
    console.log("Player 1 won!");
    btn.forEach(btnDisable);
  }  
}

function cmpFn2(item){  
  if(item.every( ai => player2Arr.includes(ai))){
    console.log("Player 2 won!");
    btn.forEach(btnDisable);
  }  
}



function btnDisable(item){
  if(item.innerHTML == " "){
    item.disabled = true;
  }
}