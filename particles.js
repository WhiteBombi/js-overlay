var game = new Phaser.Game(1280, 720, Phaser.AUTO, '', { preload: preload, create: create, update: update },true);  // 6th argument transparency
var spd = 1;
var minspd = -1.3;
//var emitter2;

function preload() {
    
    //game.load.image('particle16', 'particle16.png');   
    game.load.image('particle8', 'particle8.png');
    //game.load.image('particle4', 'particle4.png');
    
    
}

function create() {

    var emitX = (game.world.centerX * 0.3);
    var emitY = (game.world.centerY * 2.5);
    
   // Phaser.Rectangle.setTo(0, 0, game.world.centerX * 2, game.world.centerY * 2);
    
    emitter = game.add.emitter(emitX, emitY, 5000);
    
    emitter.makeParticles('particle8');
    emitter.setRotation(-50, 50);
    emitter.setAlpha(0.3, 0.6);
    emitter.setScale(0.2, 1);
    
    emitter.setXSpeed(-30,100);
    
    emitter.start(false, 40000, 40);
    //emitter = game.add.emitter(emitX * 3, emitY, 500); 
    /*emitter = game.add.emitter(emitX * 3, emitY, 500);
    emitter.makeParticles('corona');
    emitter.setRotation(-20, 20);
    emitter.setAlpha(0.3, 0.6);
    emitter.setScale(0.2, 1);
    emitter.setYSpeed(-10,-10);
    emitter.setXSpeed(-50,200);
    emitter.start(false, 18000, 50);
     */
}

function update() {
    
    
    //emitter = game.add.emitter(emitX, emitY, 500);
    //emitter.makeParticles('corona');
    
    
    
    //emitX = emitter.total;
    
    //spd = - 1000 / emitter.total
    if (spd <= minspd) {spd = - 1000 / emitter.total}
    //if (spd <= minspd) {spd = minspd}
    else {spd = minspd}
    
    emitter.gravity = spd; 
    emitter.setYSpeed(- spd * 0.3, spd);
    
    
    
    //emitter2.setRotation(-20, 20);
    //emitter2.setAlpha(0.3, 0.6);
    //emitter2.setScale(0.2, 1);
    //emitter2.gravity = -10;
    //emitter2.setYSpeed(10,10);
    //emitter2.setXSpeed(-100,100);
    
    //emitter.removeAll(100);
     
    game.debug.text(emitter.total, 32, 32);
    game.debug.text(spd, 32, 64);
    //game.debug.text(, 32, 64);
    
}