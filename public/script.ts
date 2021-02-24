"use strict";
(function () {

    function compareUserGuess(event :Event) {
        event.preventDefault();
        const secretNumber :number  = generateSecretNumber();
      //  var userNumber = document.getElementById('guess').value;
        const userNumber :number  = Number((<HTMLInputElement>document.getElementById('guess')).value);

        if (secretNumber == userNumber) {
            alert("Awesome! You number " + userNumber + " was correct. You can be named many things, hungry not being one of them.");
        }
        else {
            console.log("here223");
            alert("Bummer... You guessed " + userNumber + " and the secret number was " + secretNumber + ".");
        }
    }
    function generateSecretNumber() {
        const secretNumber = getRandomArbitrary(1, 22);
        return secretNumber;
    }
    function getRandomArbitrary(min :number, max :number) :number {
        return Math.round(Math.random() * (max - min) + min);
    }

    document.getElementById("guess-form")!.addEventListener("submit", compareUserGuess);


   // document.getElementById('guess-form').addEventListener("submit", compareUserGuess);
})();
//# sourceMappingURL=script.js.map