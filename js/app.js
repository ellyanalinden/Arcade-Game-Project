// Enemies our player must avoid

var Enemy = function(x,y,speed) {
  "use strict";
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/Gem Blue.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    //Random speed calculation
    //Enemies cross the screen
    if (this.x > 520){
        this.speed = 100 + Math.floor(Math.random() * 200);
        this.x = 0;
    }

    //Player-Enemy collision.
    //If the player is within 45px of an enemy, reset game.
    if (player.x >= this.x - 45 &&
        player.x <= this.x + 45 &&
        player.y >= this.y - 45 &&
        player.y <= this.y + 45){
          player.reset();
        }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    //Player start x  location
    this.x = 200;
    //Player start y location
    this.y = 300;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-pink-girl.png';
};

Player.prototype.update = function(){
    //Player wins if it reaches the water
    //Something happens when player wins
    if (this.y < 0) {
    alert('Hooray...You won!');
    player.reset();
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Player cannot move offscreen
Player.prototype.handleInput = function(keyPress){
  if(keyPress == 'left' && this.x > 50){
    this.x -= 90;
  }else if(keyPress == 'right' && this.x <350){
    this.x += 90;
  }else if(keyPress == 'up' && this.y > 3){
    this.y -= 80;
  }else if(keyPress == 'down' && this.y < 350){
    this.y += 80;
  }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [
    new Enemy(-10, 55, 100),
    new Enemy(-10, 140, 200),
    new Enemy(-10, 230, 500)
];

var player = new Player();

//Reset Player
Player.prototype.reset = function(){
  this.x = 200;
  this.y = 300;
};

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
  });
