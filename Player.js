class Player {
    constructor() {
        this.width = 40;
        this.height = 40;
        this.x = 350;
        this.y = 50;
        this.imageLeft = './images/ghost.png';
        this.direction = 'left'
        this.imageRight = './images/ghost-right.png';
    
    
        //this.speedX = 0;
        //this.speedY = 0;
    }
    drawPlayer() {
        //ctx.fillStyle = 'pink';
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        const playerImageLeft = new Image();
        playerImageLeft.src = this.imageLeft;
        const playerImageRight = new Image();
        playerImageRight.src = this.imageRight;
        if (this.direction === 'left') {
         ctx.drawImage(playerImageLeft, this.x, this.y, this.width, this.height);   
        } else {
         ctx.drawImage(playerImageRight, this.x, this.y, this.width, this.height);
        }
        

    }
    movePlayer(keyCode) {
        switch (keyCode) {
            //direita
            case 39:
                this.direction = 'right'
                if (this.x + this.width < canvas.width) {
                 this.x += 20;   
                }
                
                break;
                //esquerda
            case 37:
                this.direction = 'left'
                if( this.x > 0) {
                    this.x -= 20;
                }
                break;
            //cima
            case 38:
                if (this.y < canvas.height && this.y > 0){
                 this.y -= 20;   
                }
                break;
            //baixo
            case 40:
                if(this.y + this.height > 0 && this.y + this.height < canvas.height) {
                this.y += 20;    
                }      
            break;   
        }
    }

}