// [JavaScript - RPS Game]

const getUserSelection = () => prompt("Choose your weapon").toLowerCase();

const getComputerSelection = () => {
  const weapons = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * weapons.length);

  return weapons[randomIndex];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You Win";
  } else {
    return "You Lose";
  }
};

const game = (rounds) => {
  let playerScore = 0;
  let computerScore = 0;

  while (playerScore < rounds && computerScore < rounds) {
    const playerSelection = getUserSelection();
    const computerSelection = getComputerSelection();
    const result = playRound(playerSelection, computerSelection);

    console.log(`Player Selection: ${playerSelection}`);
    console.log(`Computer Selection: ${computerSelection}`);
    console.log(`Result: ${result}`);

    if (result === "You Win") {
      playerScore++;
    } else if (result === "You Lose") {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log("Player won the games");
  } else {
    console.log("You lose! Try better next time");
  }
};

game(3);