const getUserPick = () => prompt('Choose your weapon').toLowerCase();

//finally, I got this section working
const getPcPick = () => {
  const weapons = ['rock', 'paper', 'scissors'];
  const pickIndex = Math.floor(Math.random() * weapons.length);
  return weapons[pickIndex];
}

const battle = (userPick,pcPick) => {
  if (userPick === pcPick) {
    return 'Tie!';
  } else if (
    (userPick === 'rock' && pcPick === 'scissors') ||
    (userPick === 'scissors' && pcPick === 'paper') ||
    (userPick === 'paper' && pcPick ==='rock')
  ) {
    return 'PC -1 life';
  } else {
    return 'User -1 life';
  }
};

const game = (lives) => {
  let userLives = lives;
  let pcLives = lives;
  
  while (userLives !== 0 && pcLives !== 0) {
    const userPick = getUserPick();
    const pcPick = getPcPick();
    const result = battle(userPick,pcPick);
    
    console.log(`User picked: ${userPick}`);
    console.log(`PC picked: ${pcPick}`);
    console.log(`Result: ${result}`);
    
    if (result === 'PC -1 life') {
      pcLives--;
    } else if (result === 'User -1 life') {
      userLives--;
    }
  }
  if (userLives === 0) {
    console.log('You lost. No more lives left.');
  } else if (pcLives === 0) {
    console.log('You defeated PC. Congrats!');
  }
};

game(5);