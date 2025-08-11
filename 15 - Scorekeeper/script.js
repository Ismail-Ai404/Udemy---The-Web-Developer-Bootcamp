/** @format */

let oneScore = 0;
let twoScore = 0;
let winningScore = 0;
let gameOver = false;

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const span1 = document.querySelector(".span1");
const span2 = document.querySelector(".span2");
const scoreSelect = document.querySelector("#scoreSelect");

scoreSelect.addEventListener("change", function () {
     winningScore = parseInt(this.value);
     if (winningScore) {
          // Hide select & label once game starts
          scoreSelect.style.display = "none";
          scoreSelectLabel.style.display = "none";
     }
});

btn1.addEventListener("click", function () {
     if (!gameOver && winningScore) {
          oneScore++;
          if (oneScore === winningScore) {
               gameOver = true;
               span1.style.color = "green";
               span2.style.color = "red";
          }
          span1.textContent = oneScore;
     }
});

btn2.addEventListener("click", function () {
     if (!gameOver && winningScore) {
          twoScore++;
          if (twoScore === winningScore) {
               gameOver = true;
               span2.style.color = "green";
               span1.style.color = "red";
          }
          span2.textContent = twoScore;
     }
});

btn3.addEventListener("click", function () {
     if (!gameOver) {
          alert("The game hasn’t ended yet!");
     } else {
          reset();
     }
});

function reset(force = false) {
     if (!force && !gameOver) return; // prevent reset unless forced or game ended
     oneScore = 0;
     twoScore = 0;
     gameOver = false;
     span1.textContent = 0;
     span2.textContent = 0;
     span1.style.color = "";
     span2.style.color = "";

     // Show select & label again
     scoreSelect.value = "";
     scoreSelect.style.display = "inline-block";
     scoreSelectLabel.style.display = "inline-block";
     winningScore = 0;
}
