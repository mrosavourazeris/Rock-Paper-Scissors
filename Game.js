var wins = 0
var looses = 0
var ties = 0

var choice = ["R", "P", "S"]


function playGame() {

    //Ask user to enter R, P, or S
    var userChoice = prompt("Please pick R, P, or S")

    //if the user enters a lowercase letter we have to make it uppercase 
    userChoice = userChoice.toUpperCase()

    //Computer picks an option out of the array choice
    var computerChoice = choice[Math.floor(Math.random() * choice.length)]

    //Message tells you what the computer picked 
    alert("The computer picked " + computerChoice)

    //Results of what you picked vs what the computer picked, should have an alert after each scenario to let you know what happened
    if (
        userChoice === "R" && computerChoice === "S" ||
        userChoice === "S" && computerChoice === "P" ||
        userChoice === "P" && computerChoice === "R" 
        ) {
            wins++
            alert("You win! 😎")
        }

    else if (userChoice === computerChoice) {
        ties++
        alert("It's a tie 😑")
    }

    else {
        looses++
    }

    //Message displays Stats: Wins, Losses, and Ties 

    alert("Stats:\nWins: " + wins + "\nLooses: " + looses + "\nTies: " + ties)


    //Ask the user if they want to play again 
    var playAgain = confirm("Do you want to play again?")

    //if the user picks play again, play game again. If the not then game stops 
    if (playAgain === true){
        playGame()
    }

} //playGame ends 


//run game 
playGame()