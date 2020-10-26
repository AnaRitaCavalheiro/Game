class Component {
    constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
    }
    update() {
        const ctx = gameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    newPos() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    left() { 
        return this.x;
    }
    right(){
        return this.x + this.width;
    }
    top() {
        return this.y;
    }
    bottom() {
        return this.y + this.height;
    }
    crashWith(obstacle) {
        return !(this.bottom()< obstacle.top() || 
        this.top() > obstacle.bottom() ||
        this.right() < obstacle.left() ||
        this.left() > obstacle.right())
    }
}

let player = new Component(30, 30, 'pink', 0, 110);
function updateGameArea() {
    gameArea.clear();
    player.newPos();
    player.update();
    updateObstacles();
    checkGameOver();
    gameArea.score();
}
document.addEventListener('keydown', e => {
    switch (e.keyCode) {
       case 38: 
        player.speedY -= 1;
        break;
        case 40:
        player.speedY += 1;
        break;
        case 37:
        player.speedX -= 1;
        break;
        case 39:
        player.speedX += 1
        break;
    }
});

document.addEventListener('keyup', () =>{
    player.speedX= 0;
    player.speedY = 0;
});