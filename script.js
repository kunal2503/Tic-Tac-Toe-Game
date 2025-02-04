let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let result = document.querySelector("p");

let playerTurn = true;

let winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
    [2, 5, 8],
    [1, 4, 7],
];

resetBtn.addEventListener("click", () => {
    boxes.forEach((b) => {
        b.innerText = "";
        b.classList.remove("disabled");
    });
    playerTurn = true;
    result.innerText="Player X turn";
});

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("click");
        if (playerTurn === true) {
            box.innerText = "X";
            result.innerText = "Player O turn";
            playerTurn = false;
        } else {
            box.innerText = "O";
            result.innerText = "Player X turn";
            playerTurn = true;
        }
        box.classList.add("disabled");
        checkWinner()

    });
});

function checkWinner(e) {
    for (let pattern of winningPatterns) {
        let position1value = boxes[pattern[0]].innerText;
        let position2value = boxes[pattern[1]].innerText;
        let position3value = boxes[pattern[2]].innerText;
        if (position1value != "" && position2value != "" && position3value != "") {
            if (position1value === position2value && position2value === position3value) {
                result.innerText = `Winner ${position1value}`;
                
                boxes.forEach((box) => {
                    if (!box.classList.contains("disabled")) {
                        box.classList.add("disabled");
                    }
                });
                pattern.forEach((index) => {
                    boxes[index].classList.add("winner");
                    setTimeout(() => {
                        boxes[index].classList.remove("winner");
                    }, 10000);
                });
            }
        }
    }
}

