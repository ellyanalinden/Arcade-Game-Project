# Classic Arcade Game

## Table of Contents
* Game description
* How to play
* Programming description
* How to run

## Game description
There are two main characters in this game: the player and the enemy. In order to win the game, the player has to reach the water without colliding into one of the enemies.

## How to play
* Player uses arrow keys to move up, down, left and right
* Player needs to avoid collision with enemies  
* Enemies move in random speed... so watch out!!
* If player collides with one of the enemies, the game will reset
* If player reaches the water, the player wins.

## Programming Description
The game is written in JavaScript. I used starter code provided by Udacity. Then, I used object-oriented programming to add basic functionality.
* I created allEnemies and player objects.
* I used Enemy.prototype.update(dt) method to create enemies' movement, random speed and check collision.
* If player-enemy collides, the player will return to its initial position (game resets).
* I created alert, if player reaches water (wins). Then, the game will reset.

## How to run
Play online:
https://ellyanalinden.github.io/Arcade-Game-Project/

Run application locally:
* Clone the repository using git or download the file
* Navigate where you unzipped or cloned the repository
* Open index HTML in your browser
