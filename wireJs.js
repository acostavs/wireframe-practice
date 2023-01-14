function greetUser() {
    let getUserName = prompt("What's your name?");
    console.log("You wrote " + getUserName);
    document.write("Welcome Back " + getUserName + " ");
};

function getTeam() {
    let getTeam = prompt("Who The Best NFC East Team?");
    if (getTeam == "Cowboys") {
        document.write("GO COWBOYS!!!")

    }
    else {
        alert("BOOOOOOOOOO!!!!!")
    }

}

greetUser();
getTeam();

// let myFavTeam = "Cowboys";
// let yourGuess = prompt("Who's The Best Football Team?");

// if (yourGuess == myFavTeam) {
//     document.write("GO COWBOYS!!!")
// }
// else if (yourGuess == "Commanders") {
//     document.write("BOOOOOO!!")
// }
// else {
//     document.write("Wrong guess")
// };
