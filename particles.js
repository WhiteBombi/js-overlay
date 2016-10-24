var game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', { preload: preload, create: create, update: update },false);  // 6th argument transparency
var emitter;

function preload() {
    
    game.load.image('corona', 'particle.png');   
    
}

function create() {

    var emitX = (game.world.centerX * 0.3);
    var emitY = (game.world.centerY * 2 + 300);
    
   // Phaser.Rectangle.setTo(0, 0, game.world.centerX * 2, game.world.centerY * 2);
    
    emitter = game.add.emitter(emitX, emitY, 500);
    emitter.makeParticles('corona');
    emitter.setRotation(-20, 20);
    emitter.setAlpha(0.3, 0.6);
    emitter.setScale(0.2, 1);
    emitter.gravity = -10;
    emitter.setYSpeed(10,10);
    emitter.setXSpeed(-50,200);
    emitter.start(false, 17500, 50);
    
    emitter = game.add.emitter(emitX * 3, emitY, 500);
    emitter.makeParticles('corona');
    emitter.setRotation(-20, 20);
    emitter.setAlpha(0.3, 0.6);
    emitter.setScale(0.2, 1);
    emitter.gravity = -10;
    emitter.setYSpeed(10,10);
    emitter.setXSpeed(-100,100);
    emitter.start(false, 17500, 50);
}

function update() {
    
    game.debug.text(emitter.total, 32, 32);
    
    
}