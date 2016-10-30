var game = new Phaser.Game(1280, 720, Phaser.AUTO, '', { preload: preload, create: create, update: update },false);  // 6th argument transparency
var spd = 10;
var gravity = -10
var minspd = -10.3;
var emitterLife = 20;    // Lifetime of emitter particles in seconds
var maxParticles = 1000;
var emitter1;
var emitter2;
var emitter3;


function preload() {

    game.load.image('particle16', 'particle16.png');
    game.load.image('particle8', 'particle8.png');
    game.load.image('particle4', 'particle4.png');


}

function create() {


    var emitX1 = (game.world.centerX * -0.5);
    var emitX2 = (game.world.centerX * 1.8);
    var emitY1 = (game.world.centerY * 2.2);
    //var emitY2 = (game.world.centerY * 1.5);
    
    emitter1 = game.add.emitter(emitX1, emitY1, maxParticles);
    emitter1.makeParticles(['particle16','particle8','particle4']);
    emitter1.setRotation(-50, 50);
    emitter1.setAlpha(0.3, 0.6);
    emitter1.setScale(0.2, 1);
    emitter1.setXSpeed(0,100);
    emitter1.bounce.setTo(0.1,0.1);
    
    emitter1.gravity = gravity;
    emitter1.start(false, emitterLife * 1000, 40);
    
/*    emitter2 = game.add.emitter(emitX1, emitY1, maxParticles);
    emitter2.makeParticles('particle8');
    emitter2.setRotation(-50, 50);
    emitter2.setAlpha(0.3, 0.6);
    emitter2.setScale(0.2, 1);
    emitter2.setXSpeed(0,100);
    emitter2.gravity = gravity;
    emitter2.start(false, emitterLife * 1000, 40);
    
    emitter3 = game.add.emitter(emitX1, emitY1, maxParticles);
    emitter3.makeParticles('particle4');
    emitter3.setRotation(-50, 50);
    emitter3.setAlpha(0.3, 0.6);
    emitter3.setScale(0.2, 1);
    emitter3.setXSpeed(0,100);
    emitter3.gravity = gravity;
    emitter3.start(false, emitterLife * 1000, 40);
   */ 

    game.add.tween(emitter1).to( { emitX: emitX2 }, 500, Phaser.Easing.Linear.None, true, 0, Number.MAX_VALUE, true);
   /* game.add.tween(emitter2).to( { emitX: emitX2 }, 450, Phaser.Easing.Linear.None, true, 0, Number.MAX_VALUE, true);
    game.add.tween(emitter3).to( { emitX: emitX2 }, 400, Phaser.Easing.Linear.None, true, 0, Number.MAX_VALUE, true);
    */
    
}





/*function shifter(a,b){
    
    if (emitX > a)
    
}*/


function update() {
game.physics.arcade.collide(emitter1);

    //emitter = game.add.emitter(emitX, emitY, 500);
    //emitter.makeParticles('corona');



    //emitX = emitter.total;

    /*//spd = - 1000 / emitter.total
    if (spd <= minspd) {spd = - 1000 / emitter1.total}
    //if (spd <= minspd) {spd = minspd}
    else {spd = minspd}

    emitter1.gravity = spd;
    //emitter1.setYSpeed(- spd * 0.3, spd);


    if (spd <= minspd) {spd = - 1000 / emitter2.total}
        //if (spd <= minspd) {spd = minspd}
    else {spd = minspd}
    
    emitter2.gravity = spd;
    //emitter2.setYSpeed(- spd * 0.3, spd);
    
    if (spd <= minspd) {spd = - 1000 / emitter2.total}
        //if (spd <= minspd) {spd = minspd}
    else {spd = minspd}
    
    emitter3.gravity = spd;
    //emitter3.setYSpeed(- spd * 0.3, spd);


*/

    //emitter2.setRotation(-20, 20);
    //emitter2.setAlpha(0.3, 0.6);
    //emitter2.setScale(0.2, 1);
    //emitter2.gravity = -10;
    //emitter2.setYSpeed(10,10);
    //emitter2.setXSpeed(-100,100);

    //emitter.removeAll(100);

    game.debug.text(emitter1.total, 32, 32);
    game.debug.text(spd, 32, 64);
    //game.debug.text(, 32, 64);

}