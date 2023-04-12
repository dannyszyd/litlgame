alert("I'm thinking of a number between 1-10");

let ranNum = Math.round(Math.random() * 10);
let guess = 0; /*parseInt(prompt("What is your guess?"));*/
let tries = 1;

while(guess != ranNum){
    guess = parseInt(prompt("What is your guess?"));
    if(guess != ranNum){
        alert("Wrong, try again.");
        tries++;
    }else if(guess === ranNum){
        alert("You got it!");
    }
 
}
alert("It took you: " + tries + "tries");

/*just reload broswer if you want to play again*/