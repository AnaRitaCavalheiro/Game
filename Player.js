class Player {
    constructor() {
        this.width = 50;
        this.height = 50;
        this.x = 0;
        this.y = 0;
        //this.speedX = 0;
        //this.speedY = 0;
    }
    drawPlayer() {
        ctx.fillStyle = 'pink';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    movePlayer(keyCode) {
        switch (keyCode) {
            //direita
            case 39:
                this.x += 5;
                break;
                //esquerda
            case 37:
                this.x -= 5;
                break;
            //cima
            case 38:
                this.y -= 5;
                break;
            //baixo
            case 40:
                this.y += 5;
            break;   
        }
    }
}