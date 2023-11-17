//variables
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let boardW = 7;
let boardH = 6;
let runDraw = true;
let grid = [];
let spaces0 = 5;
let spaces1 = 5;
let spaces2 = 5;
let spaces3 = 5; 
let spaces4 = 5;
let spaces5 = 5;
let spaces6 = 5;
let spaceRadius = 39;
let player = 0; //1 for one colour, 2 for the other
let win = false;
let spot;
let hBreak = false; //horizontal
let vBreak = false; //vertical
let duBreak = false; //diagonal up /
let ddBreak = false; //diagonal down \

let color1 = "indianred";
let color2 = "goldenrod";

let gameOn = false;
let click = document.getElementById("click"); 
let buttonPush = document.getElementById("push");
let cpu = true;

document.getElementById("myCanvas").addEventListener("mousedown", touchStart, false); 

runGame();

//mouse click function
function colClick(elmnt) {
    document.getElementById(elmnt.id).onclick = hitTest;
    
    function hitTest(e) {
        e = e || window.event;
        e.preventDefault();
        
        let bound = canvas.getBoundingClientRect();
        
        let x = event.clientX - bound.left - canvas.clientLeft;
        let y = event.clientY - bound.top - canvas.clientTop;
        
        //help popup
        if (x >= 13 && x <= (13 + 52) && y >= 44 && y <= (44 + 31)) {
            alert("Select player mode. Drop one of your checks into one of slots at the top of the grid.  Get 4 of your color checkers in a row horizontally, vertically or diagonally before your opponent. Then, let your opponent take their turn.");
        }
        
        //colour scheme
        if (x >= 48 && x <= 93 && y >= 325 && y <= 370) {
            color1 = "indianred";
            color2 = "goldenrod";
        } else if (x >= 103 && x <= 148 && y >= 325 && y <= 370) {
            color1 = "mediumseagreen";
            color2 = "powderblue";
        } else if (x >= 158 && x <= 203 && y >= 325 && y <= 370) {
            color1 = "orchid";
            color2 = "lightsalmon";
        }
        
        //choose player mode
        //one player mode
        if (x >= 43 && x <= (43 + 167) && y >= 164 && y <= (164 + 41)) {
            for (row = 0; row < boardH; row++) {
                for (col = 0; col < boardW; col++) {
                    grid[row][col] = 0;
                }
            }
            
            spaces0 = 5;
            spaces1 = 5;
            spaces2 = 5;
            spaces3 = 5;
            spaces4 = 5;
            spaces5 = 5;
            spaces6 = 5;
            
            cpu = true;
            gameOn = true;
            win = false;
            drawGrid();
            drawBoard();
            buttonPush.play();
        } else if (x >= 43 && x <= (43 + 167) && y >= 218 && y <= (218 + 41)) {
        //two player mode
            for (row = 0; row < boardH; row++) {
                for (col = 0; col < boardW; col++) {
                    grid[row][col] = 0;
                }
            }
            
            spaces0 = 5;
            spaces1 = 5;
            spaces2 = 5;
            spaces3 = 5;
            spaces4 = 5;
            spaces5 = 5;
            spaces6 = 5;
            
            let choosePlayer = Math.random() * 2;
            if (choosePlayer >=0 && choosePlayer < 1) {
                player = 1;
            } else {
                player = 2;
            }
            
            cpu = false;
            gameOn = true;
            drawGrid();
            drawBoard();
            buttonPush.play();
        }
        
        //two player
        if (cpu == false) {
            if (x >= 261 && x <= 339 && y > 131 && y < 624) {
                //col0
                if (spaces0 >= 0) {
                    if (player == 1) {
                        grid[spaces0][0] = 1;
                        click.play();
                        drawBoard();
                        checkWin();
                        player = 2;
                    } else if (player == 2) {
                        grid[spaces0][0] = 2;
                        click.play();
                        drawBoard();
                        checkWin();
                        player = 1;
                    }

                    spaces0-=1;
                }
            } else if (x >= 344  && x <= 422 && y > 131 && y < 624) {
                //col1
                if (spaces1 >= 0) {
                    if (player == 1) {
                        grid[spaces1][1] = 1;
                        click.play();
                        drawBoard();
                        checkWin();
                        player = 2;
                    } else if (player == 2) {
                        grid[spaces1][1] = 2;
                        click.play();
                        drawBoard();
                        checkWin();
                        player = 1;
                    }

                    spaces1-=1;
                }
            } else if (x >= 427 && x <= 466 && y > 131 && y < 624) {
                //col2
                if (spaces2 >= 0) {
                    if (player == 1) {
                        grid[spaces2][2] = 1;
                        click.play();
                        drawBoard();
                        checkWin();
                        player = 2;
                    } else if (player == 2) {
                        grid[spaces2][2] = 2;
                        click.play();
                        drawBoard();
                        checkWin();
                        player = 1;
                    }

                    spaces2-=1;
                }
            } else if (x >= 510 && x <= 588 && y > 131 && y < 624) {
                //col3
                if (spaces3 >= 0) {
                      if (player == 1) {
                        grid[spaces3][3] = 1;
                        click.play();
                        drawBoard();
                        checkWin();
                        player = 2;
                    } else if (player == 2) {
                        grid[spaces3][3] = 2;
                        click.play();
                        drawBoard();
                        checkWin();
                        player = 1;
                    }

                    spaces3-=1;
                }
            } else if (x >= 593 && x <= 671 && y > 131 && y < 624) {
                //col4
                if (spaces4 >= 0) {
                       if (player == 1) {
                        grid[spaces4][4] = 1;
                        click.play();
                        drawBoard();
                        checkWin();
                        player = 2;
                    } else if (player == 2) {
                        grid[spaces4][4] = 2;
                        click.play();
                        drawBoard();
                        checkWin();
                        player = 1;
                    }
                    
                    spaces4-=1;
                }
            } else if (x >= 676 && x <= 754 && y > 131 && y < 624) {
                //col5
                if (spaces5 >= 0) {
                        if (player == 1) {
                        grid[spaces5][5] = 1;
                        click.play();
                        drawBoard();
                        checkWin();
                        player = 2;
                    } else if (player == 2) {
                        grid[spaces5][5] = 2;
                        click.play();
                        drawBoard();
                        checkWin();
                        player = 1;
                    }
                    
                    spaces5-=1;
                }
            } else if (x >= 759 && x <= 837 && y > 131 && y < 624) {
                //col6
                if (spaces6 >= 0) {
                       if (player == 1) {
                        grid[spaces6][6] = 1;
                        click.play();
                        drawBoard();
                        checkWin();
                        player = 2;
                    } else if (player == 2) {
                        grid[spaces6][6] = 2;
                        click.play();
                        drawBoard();
                        checkWin();
                        player = 1;
                    }

                    spaces6-=1;
                }
            }
        } else if (cpu == true) { //computer play
            if (x >= 261 && x <= 339 && y > 131 && y < 624) {
                //col0
                if (spaces0 >= 0) {
                    grid[spaces0][0] = 1;
                    click.play();
                    drawBoard();
                    checkWin();
                    if (win == false) {
                        spaces0-=1;
                        computer();
                    }
                }
            } else if (x >= 344  && x <= 422 && y > 131 && y < 624) {
                //col1
                if (spaces1 >= 0) {
                    grid[spaces1][1] = 1;
                    click.play();
                    drawBoard();
                    checkWin();
                    if (win == false) {
                        spaces1-=1;
                        computer();
                    }
                }
            } else if (x >= 427 && x <= 505 && y > 131 && y < 624) {
                //col2
                if (spaces2 >= 0) {
                    grid[spaces2][2] = 1;
                    click.play();
                    drawBoard();
                    checkWin();
                    if (win == false) {
                        spaces2-=1;
                        computer();
                    }
                }
            } else if (x >= 510 && x <= 588 && y > 131 && y < 624) {
                //col3
                if (spaces3 >= 0) {
                    grid[spaces3][3] = 1;
                    click.play();
                    drawBoard();
                    checkWin();
                    if (win == false) {
                        spaces3-=1;
                        computer();
                    }
                }
            } else if (x >= 593 && x <= 671 && y > 131 && y < 624) {
                //col4
                if (spaces4 >= 0) {
                    grid[spaces4][4] = 1;
                    click.play();
                    drawBoard();
                    checkWin();
                    if (win == false) {
                        spaces4-=1;
                        computer();
                    }
                }
            } else if (x >= 676 && x <= 754 && y > 131 && y < 624) {
                //col5
                if (spaces5 >= 0) {
                    grid[spaces5][5] = 1;
                    click.play();
                    drawBoard();
                    checkWin();
                    if (win == false) {
                        spaces5-=1;
                        computer();
                    }
                }
            } else if (x >= 759 && x <= 837 && y > 131 && y < 624) {
                //col6
                if (spaces6 >= 0) {
                    grid[spaces6][6] = 1;
                    click.play();
                    drawBoard();
                    checkWin();
                    if (win == false) {
                        spaces6-=1;
                        computer();
                    }
                }
            }
        }
    }
}

//computer function
function computer() {
    hBreak = false;
    vBreak = false;
    duBreak = false;
    ddBreak = false;
    
    smartHorizontal();
    if (hBreak == false) {
        smartVertical();
        if (vBreak == false) {
            smartDiagonalUp();
            if (duBreak == false) {
                smartDiagonalDown();
            }
        }
    }
    
    console.log(spot);
    
        if (spot >= 0 && spot < 1) {
            if (spaces0 >= 0) {
                grid[spaces0][0] = 2;
                drawBoard();
                checkWin();
                spaces0-=1;
            } else {
                computer();
            }
        } else if (spot >= 1 && spot < 2) {
            if (spaces1 >= 0) {
                grid[spaces1][1] = 2;
                drawBoard();
                checkWin();
                spaces1-=1;
            } else {
                computer();
            }
        } else if (spot >= 2 && spot < 3) {
            if (spaces2 >= 0) {
                grid[spaces2][2] = 2;
                drawBoard();
                checkWin();
                spaces2-=1;
            } else {
                computer();
            }
        } else if (spot >= 3 && spot < 4) {
            if (spaces3 >= 0) {
                grid[spaces3][3] = 2;
                drawBoard();
                checkWin();
                spaces3-=1;
            } else {
                computer();
            }
        } else if (spot >= 4 && spot < 5) {
            if (spaces4 >= 0) {
                grid[spaces4][4] = 2;
                drawBoard();
                checkWin();
                spaces4-=1;
            } else {
                computer();
            }
        } else if (spot >= 5 && spot < 6) {
            if (spaces5 >= 0) {
                grid[spaces5][5] = 2;
                drawBoard();
                checkWin();
                spaces5-=1;
            } else {
                computer();
            }
        } else if (spot >= 6 && spot < 7) {
            if (spaces6 >= 0) {
                grid[spaces6][6] = 2;
                drawBoard();
                checkWin();
                spaces6-=1;
            } else {
                computer();
            }
        }
}

//simple AI
function smartHorizontal() {
    breakout = false;

    for (row = 0; row < boardH; row++) {
        for (col = 0; col < boardW - 3; col++) {
            //goal: win
            if (grid[row][col] == 2 && grid[row][col+1] == 2 && grid[row][col+2] == 2 && grid[row][col+3] == 0) {
                spot = col+3;
                breakout = true;
                break;
            } else if (grid[row][col] == 2 && grid[row][col+1] == 2 && grid[row][col+2] == 0 && grid[row][col+3] == 2) {
                spot = col+2;
                breakout = true;
                break;
            } else if (grid[row][col] == 2 && grid[row][col+1] == 0 && grid[row][col+2] == 2 && grid[row][col+3] == 2) {
                spot = col+1;
                breakout = true;
                break;
            } else if (grid[row][col] == 0 && grid[row][col+1] == 2 && grid[row][col+2] == 2 && grid[row][col+3] == 2) {
                spot = col;
                breakout = true;
                break;
                
            //goal: block
            } else if (grid[row][col] == 1 && grid[row][col+1] == 1 && grid[row][col+2] == 1 && grid[row][col+3] == 0) {
                spot = col+3;
                breakout = true;
                break;
            } else if (grid[row][col] == 1 && grid[row][col+1] == 1 && grid[row][col+2] == 0 && grid[row][col+3] == 1) {
                spot = col+2;
                breakout = true;
                break;
            } else if (grid[row][col] == 1 && grid[row][col+1] == 0 && grid[row][col+2] == 1 && grid[row][col+3] == 1) {
                spot = col+1;
                breakout = true;
                break;
            } else if (grid[row][col] == 0 && grid[row][col+1] == 1 && grid[row][col+2] == 1 && grid[row][col+3] == 1) {
                spot = col;
                breakout = true;
                break;
            } else {
                spot = Math.random() * 7;
            }
        }
        if (breakout == true) {
            hBreak = true;
            break;
        }
    }
}

function smartVertical() {
    breakout = false;
    
    for (row = 0; row < boardH - 3; row++) {
        for (col = 0; col < boardW; col++) {
            //goal: win
            if (grid[row][col] == 0 && grid[row+1][col] == 2 && grid[row+2][col] == 2 && grid[row+3][col] == 2) {
                spot = col;
                breakout = true;
                break;
                
            //goal: block
            } else if (grid[row][col] == 0 && grid[row+1][col] == 1 && grid[row+2][col] == 1 && grid[row+3][col] == 1) {
                spot = col;
                breakout = true;
                break;
            } else {
                spot = Math.random() * 7;
            }
        }
        if (breakout == true) {
            vBreak =true;
            break;
        }
    }
}

function smartDiagonalUp() {
    breakout = false;
    
    for (row = boardH - 1; row > 3; row--) {
        for (col = 0; col < boardW - 3; col++) {
            //goal: win
            if (grid[row][col] == 2 && grid[row-1][col+1] == 2 && grid[row-2][col+2] == 2 && grid[row-3][col+3] == 0) {
				grid[row-3][col+3] = 2;
                breakout = true;
                break;
			} else if (grid[row][col] == 2 && grid[row-1][col+1] == 2 && grid[row-2][col+2] == 0 && grid[row-3][col+3] == 2) {
                grid[row-2][col+2] = 2;
                breakout = true;
                break;
            } else if (grid[row][col] == 2 && grid[row-1][col+1] == 0 && grid[row-2][col+2] == 2 && grid[row-3][col+3] == 2) {
                grid[row-1][col+1] == 2;
                breakout = true;
                break;
            } else if (grid[row][col] == 0 && grid[row-1][col+1] == 2 && grid[row-2][col+2] == 2 && grid[row-3][col+3] == 2) {
                grid[row][col] == 2;
                breakout = true;
                break;
                
            //goal: block
            } else if (grid[row][col] == 1 && grid[row-1][col+1] == 1 && grid[row-2][col+2] == 1 && grid[row-3][col+3] == 0) {
				grid[row-3][col+3] = 2;
                breakout = true;
                break;
			} else if (grid[row][col] == 1 && grid[row-1][col+1] == 1 && grid[row-2][col+2] == 0 && grid[row-3][col+3] == 1) {
                grid[row-2][col+2] = 2;
                breakout = true;
                break;
            } else if (grid[row][col] == 1 && grid[row-1][col+1] == 0 && grid[row-2][col+2] == 1 && grid[row-3][col+3] == 1) {
                grid[row-1][col+1] == 2;
                breakout = true;
                break;
            } else if (grid[row][col] == 0 && grid[row-1][col+1] == 1 && grid[row-2][col+2] == 1 && grid[row-3][col+3] == 1) {
                grid[row][col] == 2;
                breakout = true;
                break;
            } else {
                spot = Math.random() * 7;
            }
        }
        if (breakout == true) {
            duBreak = true;
            break;
        }
    }
}

function smartDiagonalDown() {
    breakout = false;
    
    for (row = 0; row < boardH - 3; row++) {
        for (col = 0; col < boardW - 3; col++) {
            //goal: win
            if (grid[row][col] == 2 && grid[row+1][col+1] == 2 && grid[row+2][col+2] == 2 && grid[row+3][col+3] == 0) {
				grid[row+3][col+3] = 2;
                breakout = true;
                break;
			} else if (grid[row][col] == 2 && grid[row+1][col+1] == 2 && grid[row+2][col+2] == 0 && grid[row+3][col+3] == 2) {
                grid[row+2][col+2] = 2;
                breakout = true;
                break;
            } else if (grid[row][col] == 2 && grid[row+1][col+1] == 0 && grid[row+2][col+2] == 2 && grid[row+3][col+3] == 2) {
                grid[row+1][col+1] = 2;
                breakout = true;
                break;
            } else if (grid[row][col] == 0 && grid[row+1][col+1] == 2 && grid[row+2][col+2] == 2 && grid[row+3][col+3] == 2) {
                grid[row][col] = 2;
                breakout = true;
                break;
                
            //goal: block
            } else if (grid[row][col] == 1 && grid[row+1][col+1] == 1 && grid[row+2][col+2] == 1 && grid[row+3][col+3] == 0) {
				grid[row+3][col+3] = 2;
                breakout = true;
                break;
			} else if (grid[row][col] == 1 && grid[row+1][col+1] == 1 && grid[row+2][col+2] == 0 && grid[row+3][col+3] == 1) {
                grid[row+2][col+2] = 2;
                breakout = true;
                break;
            } else if (grid[row][col] == 1 && grid[row+1][col+1] == 0 && grid[row+2][col+2] == 1 && grid[row+3][col+3] == 1) {
                grid[row+1][col+1] = 2;
                breakout = true;
                break;
            } else if (grid[row][col] == 0 && grid[row+1][col+1] == 1 && grid[row+2][col+2] == 1 && grid[row+3][col+3] == 1) {
                grid[row][col] = 2;
                breakout = true;
                break;
            } else {
                spot = Math.random() * 7;
            }
        }
        if (breakout == true) {
            ddBreak = true;
            break;
        }
    }
}

//click to start
function touchStart(event) {

    
        if(gameOn==false){

            drawGrid();
            drawBoard();
            if (win == false) {
                colClick(document.getElementById("myCanvas"));
            }
            gameOn = true;
            
        }

}

//run game
function runGame() {

    if (gameOn == true) {
        
        drawGrid();
        drawBoard();
        if (win == false) {
            colClick(document.getElementById("myCanvas"));
        }
	}
    
    //colour scheme
    ctx.fillStyle = "white";
    ctx.fillRect(40, 300, 175, 175);
    ctx.font = "16px Helvetica";
    ctx.fillStyle = "black";
    ctx.fillText("Pick a Colour:", 80, 300);
    
    ctx.strokeRect(48, 325, 45, 45);
    ctx.strokeRect(103, 325, 45, 45);
    ctx.strokeRect(158, 325, 45, 45);
    
    //red&yellow
    ctx.beginPath();
    ctx.moveTo(48, 325);
    ctx.lineTo(93, 370);
    ctx.lineTo(48, 370);
    ctx.fillStyle = "indianred";
    ctx.fill();
    ctx.closePath;
    ctx.beginPath();
    ctx.moveTo(48, 325);
    ctx.lineTo(93, 370);
    ctx.lineTo(93, 325);
    ctx.fillStyle = "goldenrod";
    ctx.fill();
    ctx.closePath;
    
    //greenandblue
    ctx.beginPath();
    ctx.moveTo(103, 325);
    ctx.lineTo(148, 370);
    ctx.lineTo(103, 370);
    ctx.fillStyle = "mediumseagreen";
    ctx.fill();
    ctx.closePath;
    ctx.beginPath();
    ctx.moveTo(103, 325);
    ctx.lineTo(148, 370);
    ctx.lineTo(148, 325);
    ctx.fillStyle = "powderblue";
    ctx.fill();
    ctx.closePath;
    
    //purpleandpink
    ctx.beginPath();
    ctx.moveTo(158, 325);
    ctx.lineTo(203, 370);
    ctx.lineTo(158, 370);
    ctx.fillStyle = "orchid";
    ctx.fill();
    ctx.closePath;
    ctx.beginPath();
    ctx.moveTo(158, 325);
    ctx.lineTo(203, 325);
    ctx.lineTo(203, 370);
    ctx.fillStyle = "lightsalmon";
    ctx.fill();
    ctx.closePath;
}

//create grid
function drawGrid() {
    for (row = 0; row < boardH; row++) {
        grid[row] = [];
        for (col = 0; col < boardW; col++) {
            addCell(row, col);
        }
    }
}

//create grid object
function addCell(row, col) {
    grid[row][col] = 0;
}

//draw board function
function drawBoard() {
        //draw board
        ctx.fillStyle = "dodgerblue";
        ctx.fillRect(234, 104, boardW * 90, boardH * 90);
        ctx.strokeRect(234, 104, boardW * 90, boardH * 90);

        //draw circles
        for (row = 0; row < boardH; row++) {
            for (col = 0; col < boardW; col++) {
                ctx.beginPath();
                ctx.arc((col * 78) + 300 + (col * 5), (row * 78) + 170 + (row * 5), spaceRadius, 0, 2 * Math.PI);
                
                if (grid[row][col] == 1) {
                    ctx.fillStyle = color1;
                } else if (grid[row][col] == 2) {
                    ctx.fillStyle = color2;    
                } else {
                    ctx.fillStyle = "white";
                }
                
                ctx.fill();
                ctx.linewidth = 1;
                ctx.strokestyle = "black";
                ctx.stroke();
            }
        }
    
    //current player
    if (gameOn == true) {
        ctx.fillStyle = "white";
        ctx.fillRect(40, 460, 175, 175);
        ctx.font = "16px Helvetica";
        ctx.fillStyle = "black";
        ctx.fillText("Current Player:", 75, 475);

        ctx.beginPath();
        ctx.arc(126, 558, 55, 0, 2 * Math.PI);
        
        if (cpu == false) {
            if (player == 1) {
                ctx.fillStyle = color2;
            } else if (player == 2) {
                ctx.fillStyle = color1; 
            } else {
                ctx.fillStyle = "white";
            }
        } else if (cpu == true) {
            ctx.fillStyle = color1;
        }
        
        ctx.fill();
        ctx.linewidth = 1;
        ctx.strokestyle = "black";
        ctx.stroke();
    }
}

function checkWin() {
    //horizontal
    for (row = 0; row < boardH; row++) {
        for (col = 0; col < boardW - 3; col++) {
            if (grid[row][col] == 1 && grid[row][col+1] == 1 && grid[row][col+2] == 1 && grid[row][col+3] == 1) {
                //player one wins
                alert("CONGRATULATIONS!\nPlayer One Wins!\n\nPick a player mode to play again.");
                gameOn = false;
                win = true;
            } else if (grid[row][col] == 2 && grid[row][col+1] == 2 && grid[row][col+2] == 2 && grid[row][col+3] == 2) {
                //player two wins
                if (cpu == false) {
                    alert("CONGRATULATIONS!\nPlayer Two Wins!\n\nPick a player mode to play again.");
                } else if (cpu == true) {
                    alert("SORRY BUD!\nThe computer has won.\n\nPick a player mode to play again.");
                }
                gameOn = false;
                win = true;
            } else {
                //nobody
            }
        }
    }
    
    //veritcal
    for (row = 0; row < boardH - 3; row++) {
        for (col = 0; col < boardW; col++) {
            if (grid[row][col] == 1 && grid[row+1][col] == 1 && grid[row+2][col] == 1 && grid[row+3][col] == 1) {
                //player one wins
                alert("CONGRATULATIONS!\nPlayer One Wins!\n\nPick a player mode to play again.");
                gameOn = false;
                win = true;
            } else if (grid[row][col] == 2 && grid[row+1][col] == 2 && grid[row+2][col] == 2 && grid[row+3][col] == 2) {
                //player two wins
                if (cpu == false) {
                    alert("CONGRATULATIONS!\nPlayer Two Wins!\n\nPick a player mode to play again.");
                } else if (cpu == true) {
                    alert("SORRY BUD!\nThe computer has won.\n\nPick a player mode to play again.");
                }
                gameOn = false;
                win = true;
            } else {
                //nobody
            }
        }
    }
    
    //diagonal /
    for (row = boardH - 1; row > 3; row--) {
        for (col = 0; col < boardW - 3; col++) {
            if (grid[row][col] == 1 && grid[row-1][col+1] == 1 && grid[row-2][col+2] == 1 && grid[row-3][col+3] == 1) {
				//player one wins
                alert("CONGRATULATIONS!\nPlayer One Wins!\n\nPick a player mode to play again.");
                gameOn = false;
                win = true;
			} else if (grid[row][col] == 2 && grid[row-1][col+1] == 2 && grid[row-2][col+2] == 2 && grid[row-3][col+3] == 2) {
				//player two wins
                if (cpu == false) {
                    alert("CONGRATULATIONS!\nPlayer Two Wins!\n\nPick a player mode to play again.");
                } else if (cpu == true) {
                    alert("SORRY BUD!\nThe computer has won.\n\nPick a player mode to play again.");
                }
                gameOn = false;
                win = true;
			} else {
				//nobody
			}
        }
    }
    
    //diagonal \
    for (row = 0; row < boardH - 3; row++) {
        for (col = 0; col < boardW - 3; col++) {
            if (grid[row][col] == 1 && grid[row+1][col+1] == 1 && grid[row+2][col+2] == 1 && grid[row+3][col+3] == 1) {
				//player one wins
                alert("CONGRATULATIONS!\nPlayer One Wins!\n\nPick a player mode to play again.");
                gameOn = false;
                win = true;
			} else if (grid[row][col] == 2 && grid[row+1][col+1] == 2 && grid[row+2][col+2] == 2 && grid[row+3][col+3] == 2) {
				//player two wins
                if (cpu == false) {
                    alert("CONGRATULATIONS!\nPlayer Two Wins!\n\nPick a player mode to play again.");
                } else if (cpu == true) {
                    alert("SORRY BUD!\nThe computer has won.\n\nPick a player mode to play again.");
                }
                gameOn = false;
                win = true;
			} else {
				//nobody
			}
        }
    }
}