// while loop that works and for loop puts user specified number of img on screen

function greetUser() {
    let getUserName = prompt("What's your name?");
    console.log("You wrote " + getUserName);
    document.write("Welcome Back " + getUserName + " ");
};

function getTeam() {
    let myTeam = "cowboys"
    let userGuess = prompt("Who's The Best NFC East Team?");


    if (userGuess == myTeam) {
        alert("Go Cowboys!")
        document.write("Go Cowboys")

    }
    else {
        document.write("BOOOOOO!!!!")
    }


}

function guessNumber() {
    let pickNumber = prompt("Pick a number between 1-5")
    if (pickNumber > 5) {
        alert("Out of range. Pick again.")
        guessNumber()
    }
    else {
        let userNumber = parseInt(pickNumber)
        for (let i = 0; i < userNumber; i++) {
            const element = userNumber;
            console.log(element)
            document.write(`<img src="https://bit.ly/3H3pmsp"/>`)

        }
    }
    console.log(parseInt(pickNumber))
}

greetUser();
getTeam();
guessNumber()

    //     else if (userGuess == "Eagles") {
    //         document.write("BOOOOOOOOOO!!!!!")
    //     }

    //     else if (userGuess == "Commanders") {
    //         document.write("BOOOOOOOOOO!!!!!")
    //     }

    //     else if (userGuess == "Giants") {
    //         document.write("BOOOOOOOOOO!!!!!")
    //     }

    //     else {
    //         prompt("Try Again")
    //     }





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
