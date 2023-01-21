function favColor() {
    let userGuess = prompt("What is my favorite color? (Hint: blue)")
    while (userGuess !== "blue") {
        userGuess = prompt("What is my favorite color?")
    }
}
favColor()