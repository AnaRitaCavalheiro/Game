let currentGame;
let currentPlayer;
let ballGreen;
let ballBlue;
let ballRed;
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let scoreDiv = document.getElementById('score-div')
let isRunning = false;

canvas.style.display = 'none';
scoreDiv.style.display = 'none';
//let currentGame = new Game();
//let currentPlayer = new Player();

let startBtn = document.getElementById('start');
let startWrapper = document.getElementById('btn-wrapper');

startBtn.onclick = () => {
startGame()
highScore()
}

window.onkeydown = e => {
    let whereToGo = e.keyCode;
    currentGame.player.movePlayer(whereToGo)
}

function startGame() {
    isRunning = true;
    canvas.style.display = 'block';
    scoreDiv.style.display = 'inline';
    startWrapper.style.display = 'none';
    currentGame = new Game();
    currentPlayer = new Player();
    ballGreen = new Ball(250, 50, 3, 7, "green");
    ballBlue = new Ball(500, 70, 3, 2, "blue");
    ballRed = new Ball(100, 10, 2, 5, "red");

    currentGame.player = currentPlayer;
    currentGame.ballGreen = ballGreen;
    currentGame.ballBlue = ballBlue;
    currentGame.ballRed = ballRed;

    currentGame.obstacles.push(currentGame.ballGreen, currentGame.ballBlue, currentGame.ballRed)
    update()
    
}

function detectCollision(obstacle) {

        if (currentGame.player.x + currentGame.player.width > obstacle.x &&
            currentGame.player.x < obstacle.x + obstacle.width &&
            currentGame.player.y + currentGame.player.height > obstacle.y &&
            currentGame.player.y < obstacle.y + obstacle.height) {
                console.log('collision')
                return true } else {
                    return false
                }
             
}
let frames = 0;
function update() {



    document.getElementById('score').innerHTML = currentGame.score

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    currentGame.player.drawPlayer()

    currentGame.ballGreen.draw();
    currentGame.ballBlue.draw();
    currentGame.ballRed.draw();

    currentGame.ballGreen.updateBalls();
    currentGame.ballBlue.updateBalls();
    currentGame.ballRed.updateBalls();
    

frames++
if(frames % 40 === 1) {
    currentGame.score++

}

speedUp();

 currentGame.obstacles.forEach(obstacle => {
    obstacle.y += 1;

    if (detectCollision(obstacle)) {

        alert('Game Over')
        restart()
    }
});
    if(isRunning) {
        requestAnimationFrame(update);
    }
    
}
    
function restart() {
    isRunning = false
    highScore()
    currentGame.player = {};
    currentGame.ballGreen = {}
    currentGame.ballBlue = {}
    currentGame.ballRed = {}
    currentGame.obstacles = [];
    currentGame.balls = [];
    currentGame.score = 0;
    document.getElementById('score').innerHTML = currentGame.score;
    canvas.style.display = 'none';
    startWrapper.style.display = 'block';
    scoreDiv.style.display = 'none';
}

function highScore() {

    let currentScore = currentGame.score;
    let highScore = localStorage.getItem('HighScore');

    if(currentScore > highScore) {
        localStorage.HighScore = currentScore;
    }

    let newHighScore = localStorage.getItem('HighScore');

    document.getElementById('high-score').innerHTML = newHighScore;
}

function speedUp (){
    if (currentGame.score%30 === 0) {
        currentGame.obstacles.forEach(fasterObstacle => {
            if(fasterObstacle.vx > 0) {
                fasterObstacle.vx += 0.1
            } else {
                fasterObstacle.vx -= 0.1
            }

            if(fasterObstacle.vy > 0) {
                fasterObstacle.vy += 0.1
            } else {
                fasterObstacle.vy -= 0.1
            }
            
    });
}
}

