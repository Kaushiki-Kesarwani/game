let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".img");
const para = document.querySelector(".para");
const user = document.querySelector("#user");
const comp = document.querySelector("#computer");
const reset = document.querySelector(".reset");


reset.addEventListener("click", () => {
userScore = 0;
 compScore = 0;
 user.innerText = userScore;
 comp.innerText = compScore;
 para.innerText = "Pick your Move";
 para.style.backgroundColor = "#000033";
 para.style.color = "whitesmoke";
})

const gencompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};

const winner = (userwin, userChoice, compchoices) => {
  if (userwin) {
    userScore++;
    user.innerText = userScore;
    para.innerText = `You wins! your ${userChoice} beats ${compchoices}`;
    para.style.backgroundColor = "green";
  } else {
    compScore++;
    comp.innerText = compScore;
    para.innerText = `Computer wins! ${compchoices} beats your ${userChoice}`;
    para.style.backgroundColor = "red";
  }
};

const draw = () => {
  para.innerText = "game was draw! Pick choices again.";
  para.style.backgroundColor = "yellow";
  para.style.color = "black";
};

const playGame = (userChoice) => {

  const compchoices = gencompChoice();

  if (userChoice === compchoices) {
    draw();
  } else {
    let userwin = true;
    if (userChoice === "rock") {
      userwin = compchoices === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userwin = compchoices === "scissors" ? false : true;
    } else {
      userwin = compchoices === "rock" ? false : true;
    }
    winner(userwin, userChoice, compchoices);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
