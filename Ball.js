class Ball {
    constructor(x, y, vx, vy, color) {
        this.x = x;//100,
        this.y = y;//100,
        this.vx = vx;//20,
        this.vy = vy;//15,
        this.radius = 25,
        this.color = color;//"#2e7d32"
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

 
