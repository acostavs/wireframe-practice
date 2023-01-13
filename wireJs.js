function greetUser() {
    confirm("Are The Cowboys The Best Football Team?")
    let getUserName = prompt("What's your name?");
    console.log("You wrote " + getUserName);
    document.write("Welcome Back " + getUserName + " ");
};

greetUser();
let myFavTeam = "Cowboys";
let yourGuess = prompt("Who's The Best Football Teamm?");

if (yourGuess == myFavTeam) {
    document.write("GO COWBOYS!!!")
}
else if (yourGuess == "Commanders") {
    document.write("BOOOOOO!!")
}
else {
    document.write("Wrong guess")
};
