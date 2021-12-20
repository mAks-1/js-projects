let xx = [0];
let checkPiece = 0;
const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
const area = document.getElementById("area");
let move = 0;
document.getElementById("button").addEventListener("click", (e) => {
    for (let z = 0; z < document.querySelectorAll(".box").length; z++) {
        document.getElementById("" + z).innerHTML = "";
        document.getElementById("" + z).style.cursor = "auto";
    }
    checkPiece = 0;
    move = 0;
});
area.addEventListener("click", (e) => {
    if (checkPiece == 1) {
    } else {
        if (e.target.innerHTML == "") {
            if ((e.target.className = "box")) {
                e.target.style.cursor = "not-allowed";
                if (move % 2 === 0) {
                    e.target.innerHTML = "X";
                } else {
                    e.target.innerHTML = "O";
                }
                move++;
            }
        }
    }
    for (let x = 0; x < winner.length; x++) {
        if (
            document.getElementById(winner[x][0]).innerHTML == "X" &&
            document.getElementById(winner[x][1]).innerHTML == "X" &&
            document.getElementById(winner[x][2]).innerHTML == "X"
        ) {
            alert("X wins");
            checkPiece++;
            if (
                document.getElementById(winner[x][0]).innerHTML === "X" &&
                document.getElementById(winner[x][1]).innerHTML === "X" &&
                document.getElementById(winner[x][2]).innerHTML === "X"
            ) {
                document.getElementById("screen").innerHTML = "X wins";
                checkPiece = 0;
            }
            if (
                document.getElementById(winner[x][0]).innerHTML == "O" &&
                document.getElementById(winner[x][1]).innerHTML == "O" &&
                document.getElementById(winner[x][2]).innerHTML == "O"
            ) {
                alert("O wins");
                checkPiece++;
                if (
                    document.getElementById(winner[x][0]).innerHTML === "O" &&
                    document.getElementById(winner[x][1]).innerHTML === "O" &&
                    document.getElementById(winner[x][2]).innerHTML === "O"
                ) {
                    document.getElementById("screen").innerHTML = "O wins";
                    checkPiece = 0;
                }
            }
        } // цю дужку треба в правильне місце поставити - Віктор має знати
        for (let y = 0; y < document.querySelectorAll(".box").length; y++) {
            if (document.getElementById(y).innerHTML != "") {
                xx[y] = 1;
            }
        }
        if (
            xx[0] == 1 &&
            xx[1] == 1 &&
            xx[2] == 1 &&
            xx[3] == 1 &&
            xx[4] == 1 &&
            xx[5] == 1 &&
            xx[6] == 1 &&
            xx[7] == 1 &&
            xx[8] == 1 &&
            checkPiece != 1
        ) {
            document.getElementById("screen").innerHTML = "Nobody wins";
            checkPiece = 1;
        }
    }
});