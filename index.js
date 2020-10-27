let currentGame;
let currentPlayer;
let ballGreen;
let ballBlue;
let ballRed;
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.style.display = 'none';
//let currentGame = new Game();
//let currentPlayer = new Player();

document.getElementById('start').onclick = () => {
startGame()

}

window.onkeydown = e => {
    let whereToGo = e.keyCode;
    currentGame.player.movePlayer(whereToGo)
}

function startGame() {
    canvas.style.display = 'block';
    currentGame = new Game();
    currentPlayer = new Player();
    ballGreen = new Ball(250, 50, 5, 5, "green");
    ballBlue = new Ball(500, 70, 5, 15, "blue");
    ballRed = new Ball(100, 10, 5, 10, "red");

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


 currentGame.obstacles.forEach(obstacle => {
    obstacle.y += 1;
console.log(obstacle.y)

    if (detectCollision(obstacle)) {
        alert('Game Over')
        restart()
    }
});

    requestAnimationFrame(update);
}
    
function restart() {
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
}

function highScore() {

    let currentScore = currentGame.score;
    let highScore = localStorage.getItem('HighScore');

    if(currentScore > highScore) {
        localStorage.HighScore = currentScore;
    }

    let newHighScore = localStorage.getItem('HighScore');
    console.log(newHighScore)
    document.getElementById('high-score').innerHTML = newHighScore;
}
