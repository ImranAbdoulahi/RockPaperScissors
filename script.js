//Pseudocode:
//1. Get user input and validate it
//2. Generate random choice from the computer 
//3. Compare choices and determine winner
//4. Display results

//Get referneces to Document Object Model(DOM) elements
const userInputField = document.getElementById('user-choice');
const playButton = document.getElementById('play-button');
const resultDisplay = document.getElementById('results');

//Game choices
const validChoices = ['rock', 'paper', 'scissors'];

//Event listener for the play button
playButton.addEventListener('click', playGame);

function playGame() {
    const userChoice = userInputField.value.trim().toLowerCase();

    //Validate user input
    if (!validChoices.includes(userChoice)) {
        resultDisplay.innerText = "Invalid input. Please type rock, paper, or scissors";
        return;
    }

    //Generate computer's random choice
    const computerChoice = getComputerChoice();

    //Determine game result
    const gameResult = determineWinner(userChoice, computerChoice);
    
    //Disply the result of the game
    resultDisplay.innerText = `You chose ${userChoice}, computer chose ${computerChoice}. ${gameResult}`;
}

//Function to determine the computer's choice
function getComputerChoice () {
    const randomIndex = Math.floor(Math.random() * validChoices.length);
    return validChoices[randomIndex];
}

//Function to determin the game's outcome
function determineWinner(user, computer) { 
    if (user === computer) {
        return "It's a tie game!";
    }
    if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'scissors' && computer === 'paper') ||
        (user === 'paper' && computer === 'rock')
    ){
        return "Winner Winner, Chicken Dinner!";
    } else{
        return "The Computer wins!";
    }
}