var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene:{
        preload: preload,
        create: create,
        update: update
    }        
};

var game = new Phaser.Game(config);

var siri;

function preload() {
    this.load.image('bg','assets/bg_azul-claro.png');
    this.load.image('inteli','assets/logo-Inteli_branco.png')
    this.load.image('siriguejo','assets/siriguejo/crustaceo.png')
    this.load.image('frase', 'assets/FRASE.png');
}

function create() {
        this.add.image(400, 300, 'bg');
        this.add.image(400, 525, 'inteli').setScale(0.5);
        siri = this.add.image(400, 300, 'siriguejo');
        siri.setFlip(true, false);
        this.add.image(400, 150, 'frase');

    }
function update() {
    siri.x = this.input.x;
    siri.y = this.input.y;
}