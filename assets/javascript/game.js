var wins = document.querySelector(".wins")
var losses = document.querySelector(".loss")
var guessesLeft = document.querySelector(".guessesLeft")
var guessesSf = document.querySelector(".guessesSf")
var userChoicesArr = []
var winsCount=0
var lossCount=0
var guessCount=10
function startGame(){
    
 
    
    var computerOptions = "abcdefghijklmnopqrstuvwxyz"
    
    document.addEventListener("keydown",function(event){
        var userChoice = event.key
      
        userChoicesArr.push(userChoice)
       
        var computerChoice=computerOptions[Math.floor(Math.random() * computerOptions.length)]
        console.log(computerChoice);
        if(userChoice === computerChoice){
            winsCount ++
            userChoicesArr = []
            guessCount=11
        }

           
        guessCount --

        if(guessCount === 0){
            lossCount ++
        }
    
        wins.innerHTML="Wins : " + winsCount
        losses.innerHTML="Losses : " + lossCount
        guessesLeft.innerHTML="Guesses Left : " + guessCount
        guessesSf.innerHTML= "Your guesses so far : " + userChoicesArr
    
    console.log(userChoicesArr);
    if(guessCount === 0){
        // location.reload()
        reset()
    
    }
  
    })
}
startGame()

function reset(){
    userChoicesArr = []
    guessCount=10

}

