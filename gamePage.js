 
 const rock = 1;
 const paper = 2 ;
 const scissors = 3;
 let winner = 'There is a winner!';
 const getcomputerChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
 const getUserchoice = 0;
 
 
  if (getcomputerChoice === paper && getUserchoice === rock) { 
   winner = 'The computer wins!';
} else if  (getcomputerChoice === paper && getUserchoice === paper) { 
    winner = "It's a Tie!";
 }  else if  (getcomputerChoice === paper && getUserchoice === scissors) { 
    winner = 'You win!';
 
} else if (getcomputerChoice === rock && getUserchoice === rock) { 
    winner = "It's a Tie!";
 } else if  (getcomputerChoice === rock && getUserchoice === paper) { 
     winner = "You win!";
  }  else if  (getcomputerChoice === rock && getUserchoice === scissors) { 
     winner = 'The computer wins!';
  
    } else if (getcomputerChoice === scissors && getUserchoice === rock) { 
    winner = "YOu win!";
 } else if  (getcomputerChoice === scissors && getUserchoice === paper) { 
     winner = "The computer wins! :D";
  }  else if  (getcomputerChoice === scissors && getUserchoice === scissors) { 
     winner = 'Uh oh, Its a tie!';
  } 
  
 