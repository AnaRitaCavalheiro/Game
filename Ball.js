class Ball {
    constructor(x, y, vx, vy, color) {
        this.x = x;//100,
        this.y = y;//100,
        this.vx = vx;//20,
        this.vy = vy;//15,
        this.radius = 25,
        this.width = 50;
        this.height = 50;
        this.color = color;//"#2e7d32"
        this.img = './images/pumpkin.png'
    }
    draw() {

        const ballImage = new Image();
        ballImage.src = this.img;
        ctx.drawImage(ballImage, this.x, this.y, this.width, this.height);
        //ctx.beginPath();
        //ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        //ctx.fillStyle = this.color;
        //ctx.fill();
    }
    updateBalls() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.y + this.vy > canvas.height || this.y + this.vy < 0) {
            this.vy *= -1;
        }
        if (this.x + this.vx > canvas.width || this.x + this.vx < 0) {
            this.vx *= -1;
        }
    }
}

 
