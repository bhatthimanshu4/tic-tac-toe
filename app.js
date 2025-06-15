let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#New-btn");
let msgContainer = document.querySelector("#msgContainer");
let containerDiv = document.querySelector(".container");
let resetDiv = document.querySelector(".btn");


let msg = document.querySelector("#msg");

let turnO = true;   //playerO and PlayerX

const WinPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {                             //loop to put the simble x and o when the button will click
    box.addEventListener("click", () => {
        console.log("button was clicked");
        if (turnO) {  //player0
            box.innerText = "O";
            turnO = false;
            box.style.color = "#ff007f";
            box.style.textShadow = `0 0 0px #ff007f,
            0 0 0px #ff007f,
            0 0 27px #ff007f,
            0 0 42px #ff007f`;
        }
        else {   //playerX
            box.innerText = "X";
            turnO = true;
            box.style.color = "#00bfff";
            box.style.textShadow = ` 0 0 0px #00bfff,
            0 0 0px #00bfff,
            0 0 27px #00bfff,
            0 0 42px #00bfff`
        }
        box.disabled = true;
        checkWinner();
    });
});
const checkWinner = () => {                                       // funtion check the winner of game using pstterns
    for (Pattern of WinPatterns) {  // get the array set [0,1,2],[2,4,6] etc
        console.log(Pattern[0], Pattern[1], Pattern[2])

        let pos1val = boxes[Pattern[0]].innerText;
        let pos2val = boxes[Pattern[1]].innerText;
        let pos3val = boxes[Pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                console.log("Winner", pos1val)
                showWinner(pos1val);
            }
        }
    }
}



showWinner = (Winner) => {                          // function  show the winner of game
    msg.innerHTML = `
  <span style="color: #ff007f;">C</span>
  <span style="color: #00bfff;">o</span>
  <span style="color: #00ff7f;">n</span>
  <span style="color: #ffff00;">g</span>
  <span style="color: #ff6600;">r</span>
  <span style="color: #ff0000;">a</span>
  <span style="color: #00ffff;">t</span>
  <span style="color: #ff66cc;">u</span>
  <span style="color: #ccff00;">l</span>
  <span style="color: #ff9900;">a</span>
  <span style="color: #0099ff;">t</span>
  <span style="color: #ff3399;">i</span>
  <span style="color: #66ff66;">o</span>
  <span style="color: #ff3333;">n</span>
  <span style="color: #ccccff;">s</span>
  <span> , </span>
  <span style="color: #ff9999;">W</span>
  <span style="color: #99ccff;">i</span>
  <span style="color: #66ffcc;">n</span>
  <span style="color: #ffff66;">n</span>
  <span style="color: #ff9966;">e</span>
  <span style="color: #ff3333;">r</span>
  <span> </span>
  <span style="color: #66ccff;">i</span>
  <span style="color: #ffcc00;">s: </span>
   ${Winner}`;

    msgContainer.classList.remove("hide");
    containerDiv.classList.add("hide");
    resetDiv.classList.add("hide");
    disableBoxes();
}


const disableBoxes = () => {                  // to disable the boxes when the winner will declared.
    for (let box of boxes) {
        box.disabled = true;
    }
}

const EnableBoxes = () => {                // to enable the game boxes when user click on the reset the game 
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const resetgame = () => {                   // the reset funtion where the entire game retart
    turnO = true;
    EnableBoxes();
    msgContainer.classList.add("hide");
    containerDiv.classList.remove("hide");
    resetDiv.classList.remove("hide");

}


newgamebtn.addEventListener("click", resetgame);  // trigerd when the user click on the new game button call resert game

resetbtn.addEventListener("click", resetgame);  // trigerd when the user click on the reset game button
