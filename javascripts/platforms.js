var platformHeight = 32;
var prevPlatYPos = 2000;
var minPlatformYDist = 150;

function createPlatform() {

  platforms = game.add.group();

  platforms.enableBody = true;

  game.physics.arcade.enable(platforms);


  do {
    var platYPos = 100 + ( Math.floor( ( Math.random() * 400 ) + 1 ) );
  }
  while ( Math.abs( platYPos - prevPlatYPos ) < minPlatformYDist )

    prevPlatYPos = platYPos;

  // var platformWidth = Math.floor( Math.random() );

  var ledge = platforms.create( game.world.width, platYPos, 'ground' );

  // ledge.scale.setTo(platformWidth, 1);

  ledge.body.velocity.x = -150;

  ledge.body.immovable = true;

}

function changeNextPlatformTime(platTimer) {

  var platformGenTime = ( ( Math.random() * 3 * Phaser.Timer.SECOND ) + 2 );
  platTimer.delay = platformGenTime;


}
