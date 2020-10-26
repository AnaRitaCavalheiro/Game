const gameArea = {
    canvas: document.createElement('canvas'),
    frames: 0,
    start: function() {
        this.canvas.width = 450;
        this.canvas.height = 270;
        this.context = this.canvas.getContext('2d');
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20); // permite que o jogo pare mas faz update
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function() {
        clearInterval(this.interval);
    },
    score: function() {
        const points= Math.floor(this.frames/5);
        this.context.font= '15px serif';
        this.context.fillStyle = 'black';
        this.context.fillText(`score:${points}`, 350, 50)
    },
}