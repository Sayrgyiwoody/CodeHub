let msg1 = document.querySelector(".msg1");
let msg2 = document.querySelector(".msg2");
let msg3 = document.querySelector(".msg3");
let guess_box = document.getElementById("guess_box");
let guessed_num = [];
let answer = Math.floor(Math.random() * 51);
let chances = 10 ;

console.log(answer);
msg2.textContent = "Number of chances to guess : " + chances ;
msg1.textContent = "Guess the Number From 1 To 50";
function play() {
    let guess_num = Number(document.getElementById("guess_num").value);
    if (guess_num<0 || guess_num >50){
        alert("Please guess only 1 to 50");
        document.getElementById("guess_num").value = "";
    }else {
        if(guess_num === answer) {
            msg1.textContent = "Congratulation! You win this game.";
            guess_box.classList.add("true");
            document.querySelector(".btn-guess").disabled = true;
        }else if(guess_num >answer) {
            msg1.textContent = "Your answer is too high";
            guess_box.classList.add("false");
            document.getElementById("guess_num").value = ""; 
            chances--;
        }else {
            msg1.textContent = "Your answer is too low";
            guess_box.classList.add("false");
            document.getElementById("guess_num").value = "";
            chances--;
        }
        msg2.textContent = "Number of chances to guess : " + chances ;
        guessed_num.push(guess_num);
        msg3.textContent = "Guessed numbers are : " + guessed_num;
        if (chances <= 0 ) {
            msg1.textContent = "Game Over! Restart the game to play again.";
            document.querySelector(".btn-guess").disabled = true;
            
        }
    }
}

function restart() {
    guess_box.classList.remove("false");
    document.querySelector(".btn-guess").disabled = false;
    answer = Math.floor(Math.random() * 51);
    console.log(answer);
    guessed_num = [] ;
    msg3.textContent = "Guessed numbers are : " + guessed_num;
    chances = 10;
    msg2.textContent = "Number of chances to guess : " + chances ;
    document.getElementById("guess_num").value = ""; 
    msg1.textContent = "";
    msg1.textContent = "Guess the Number From 1 To 50";
}