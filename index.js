let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let ballGreen = new Ball(100, 100, 20, 15, "green");
let ballBlue = new Ball(50, 50, 30, 20, "blue");
let ballRed = new Ball(300, 10, 5, 10, "red");

canvas.style.display = 'none'


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
    currentGame.player = currentPlayer;
    update()
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    currentGame.player.drawPlayer()

    requestAnimationFrame(update);
   
    ballGreen.draw();

    ballGreen.x += ballGreen.vx;
    ballGreen.y += ballGreen.vy;
    if (ballGreen.y + ballGreen.vy > canvas.height || ballGreen.y + ballGreen.vy < 0) {
        ballGreen.vy *= -1;
    }
    if (ballGreen.x + ballGreen.vx > canvas.width || ballGreen.x + ballGreen.vx < 0) {
        ballGreen.vx *= -1;
    }

    ballBlue.draw();
  
    ballBlue.x += ballBlue.vx;
    ballBlue.y += ballBlue.vy;
    if (ballBlue.y + ballBlue.vy > canvas.height || ballBlue.y + ballBlue.vy < 0) {
        ballBlue.vy *= -1;
    }
    if (ballBlue.x + ballBlue.vx > canvas.width || ballBlue.x + ballBlue.vx < 0) {
        ballBlue.vx *= -1;
    }

    ballRed.draw();
   
    ballRed.x += ballRed.vx;
    ballRed.y += ballRed.vy;
    if (ballRed.y + ballRed.vy > canvas.height || ballRed.y + ballRed.vy < 0) {
        ballRed.vy *= -1;
    }
    if (ballRed.x + ballRed.vx > canvas.width || ballRed.x + ballRed.vx < 0) {
        ballRed.vx *= -1;
    }
}
