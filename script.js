

const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = [];

function guessNumber() {
    while (true) {
        let userGuess = prompt("Intenta adivinar el número secreto (entre 1 y 100):");
        
       
        if (userGuess === null) {
            console.log("Juego cancelado.");
            return;
        }
        
        
        userGuess = Number(userGuess);
        
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            console.log("Por favor, introduce un número válido entre 1 y 100.");
            continue;
        }
        
        attempts.push(userGuess);
        
        if (userGuess === secretNumber) {
            console.log("¡Felicidades, adivinaste el número secreto!");
            console.log("Números introducidos: " + attempts.join(", "));
            return;
        } else {
            console.log("Ups, el número secreto es incorrecto, vuelve a intentarlo.");
        }
    }
}

// iniciar juego
guessNumber();