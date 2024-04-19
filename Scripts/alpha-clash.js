// function play(){
//     // Step-1: Hide the Home screen. To Hide the screen add the class hidden to the home screen.
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);

//     // Show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     console.log(playgroundSection.classList);
// }

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('Player Pressed', playerPressed);

    // Stop the game if pressed Escape
    if(playerPressed === 'Escape'){
        gameOver();
    }
    // Key player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check right or wrong key pressed
    if (playerPressed === expectedAlphabet) {
        console.log('you got a point!');
        console.log('You have pressed correctly', expectedAlphabet);

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);




        // -----------------------------------
        // // Update score:
        // // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        // // 2. increase the score by 1
        // const newScore = currentScore + 1;
        // // 3. show the update score
        // currentScoreElement.innerText = newScore;
    
        // Start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('dhurr miya eida kono ktha...right key press kren');
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0 ){
            gameOver();
        }



        // -------------------
        // Step-1: get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // Step-2: reduce the life count
        // const newLife = currentLife - 1;
        // // Step-3: display the updated life count
        // currentLifeElement.innerText = newLife;
    }
}

// capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame() {
    // Step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('Your random alphabet:', alphabet);

    // set randomly generated alphabet to the screen (sho it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play() {
    // hide everything show only playGround
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // Updated final score
    // get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet highlight
   const currentAlphabet = getElementTextById('current-alphabet');
   removeBackgroundColorById(currentAlphabet);
}