let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let ball = {
    x: 100,
    y: 100,
    vx: 25,
    vy: 20,
    radius: 25,
    color: "#2e7d32",
    draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(update);
    ball.x += ball.vx;
    ball.y += ball.vy;
    if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
        ball.vy *= -1;
    }
    if (ball.x + ball.vx < canvas.width || ball.x + ball.vx < 0) {
        ball.vx *= 1.1;
    };

    document.getElementById("faster").onclick = function() {
        ball.vx *= 1.1;
    };

    document.getElementbyId("slower").onclick = function() {
        ball.vx *=0.9;
    };
}