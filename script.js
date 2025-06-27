let randomNumber = Math.trunc(Math.random()*20+1);
let chances = 20;
let highScore = 0;
document.querySelector(".guessing-number").textContent = "?";
document.querySelector(".remaining-turns").textContent = chances;
document.querySelector(".status").textContent =  "Game Status...";
document.querySelector(".highScore").textContent = "0";
document.querySelector(".highScore").style.display = "none";
document.querySelector(".guess-btn").addEventListener("click",function(){
    const guessedNumber = Number(document.querySelector(".input").value);
    if(guessedNumber == randomNumber && chances>1){
        document.querySelector(".status").textContent =  "You Won";
        document.querySelector(".guessing-number").textContent = randomNumber;
        if(highScore<chances){
            highScore = chances;
            document.querySelector(".highScore").style.display = "block";
            document.querySelector(".highScore").textContent = "High Score: " +highScore;
        }
    }else if(guessedNumber < randomNumber && chances>1){

        document.querySelector(".status").textContent =  "Too Low";
        chances--;
        document.querySelector(".remaining-turns").textContent = chances;
    }else if(guessedNumber > randomNumber && chances>1){
        document.querySelector(".status").textContent =  "Too High";
        chances--;
        document.querySelector(".remaining-turns").textContent = chances;
    }else{
            document.querySelector(".status").textContent =  "You Lose";
    }
});
document.querySelector(".restart-btn").addEventListener("click",function(){
    randomNumber = Math.trunc(Math.random()*20+1);
    document.querySelector(".highScore").style.display = "block";
    document.querySelector(".highScore").textContent = "High Score: " +highScore;
    document.querySelector(".guessing-number").textContent = "?";
    chances = 20;
    document.querySelector(".remaining-turns").textContent = chances;
    document.querySelector(".status").textContent =  "Game Status...";
})




