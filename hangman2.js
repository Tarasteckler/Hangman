var word = "";
var easyWords = ["hello", "pie", "cat", "hi", "bye", "pop", "red", "eat", "ape", "tea", "hey", "hay", "era", "roar", "sit"];
var mediumWords = ["possum", "avocado", "rabbit", "happy", "yellow", "music", "tree", "holiday", "school", "book", "jacket"];
var hardWords = ["dictionary", "bagpipes", "thanksgiving", "xylophone", "trachea", "pterodactyl", "dwarves", "jinx", "mnemonic", +
"antidisestablishmentarianism", "pneumonia", "numbskull", "wristwatch", "zigzagging", "syndrome"];
var numGuesses = 10;
var guessedLetters = [];
var possibleLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"];


function startGame(){
    var strLevel = document.getElementById("level").value;
    var level = parseInt(strLevel);
    if (level === 1){
        word = easyWords[Math.floor(Math.random() * easyWords.length)];
    }
    if (level === 2){
        word = mediumWords[Math.floor(Math.random() * mediumWords.length)];
    }
    if (level === 3){
        word = hardWords[Math.floor(Math.random() * hardWords.length)];
    }
    document.getElementById("dashes").innerHTML = printWord();
    document.getElementById("numGuesses").innerHTML = "Guesses remaining: " + numGuesses;
}

function printWord(){
    var dashedWord = "";
    for (var i = 0; i < word.length; i++) {
        if (guessedLetters.indexOf(word[i]) > -1){
            dashedWord += word[i];
        }else{
            dashedWord += " _ ";
        }
    }
    if (dashedWord.indexOf("_") === -1){
        document.getElementById("numGuesses").innerHTML = "";
        document.getElementById("guessedLetters").innerHTML = "";
        document.getElementById("dashes").innerHTML = "";
        return "Congratulations! You guessed the word!";
    }
    return dashedWord;
}

function guessLetter() {
    var guess = document.getElementById("guess").value;
    if (guessedLetters.indexOf(guess) > -1){
        document.getElementById("dashes").innerHTML = "You've already guessed that letter. Please try again.";
        document.getElementById("guess").value = "";
        return;
    }
    if (possibleLetters.indexOf(guess) === -1){
        document.getElementById("dashes").innerHTML = "You've entered an invalid letter. Please try again.";
        document.getElementById("guess").value = "";
        return;
    }
    guessedLetters.push(guess);
    document.getElementById("guessedLetters").innerHTML = "Guessed letters: " + guessedLetters;
    document.getElementById("dashes").innerHTML = printWord();
    document.getElementById("guess").value = "";
    numGuesses -= 1;
    document.getElementById("numGuesses").innerHTML = "Guesses remaining: " + numGuesses;
    if (numGuesses === 0) {
        document.getElementById("numGuesses").innerHTML = "";
        document.getElementById("guessedLetters").innerHTML = "";
        document.getElementById("dashes").innerHTML = "GAME OVER!";
    }
    document.getElementById("image").innerHTML = "<img src= 'img/" + getImage() + ".png'>";
}

function reset(){
    guessLetter="";
    document.getElementById("dashes").innerHTML = "";
    document.getElementById("numGuesses").innerHTML = "Guesses remaining: " + numGuesses;
    document.getElementById("guessedLetters").innerHTML = "";
    document.getElementById("image").innerHTML = "";
    guessedLetters = [];
}

function getImage(){
    if (numGuesses === 10){
        return "one";
    }
    if (numGuesses === 9){
        return "two";
    }
    if (numGuesses === 8){
        return "three";
    }
    if (numGuesses === 7){
        return "four";
    }
    if (numGuesses === 6){
        return "five";
    }
    if (numGuesses === 5){
        return "six";
    }
    if (numGuesses === 4){
        return "seven";
    }
    if (numGuesses === 3){
        return "eight";
    }
    if (numGuesses === 2){
        return "nine";
    }
    if (numGuesses === 1){
        return "ten";
    }
}
