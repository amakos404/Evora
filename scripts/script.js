export function onBoot(game)
{
  /*
  *   GAME ASSETS
  */

  // points to '/levels' folder and retrieves json file
  game.level('level1.json'); 

  // points to '/assets/sprites' and retrieves image
  // game.Sprite('name', 'filepath', frameWidth, frameHeight)
  game.sprite('head', 'heads/head0.png', 32, 32);
  game.sprite('head1', 'heads/head1.png', 32, 32);
  game.sprite('body', 'bodies/body0.png', 32, 32);
  game.sprite('body1', 'bodies/body1.png', 32, 32);
  game.sprite('body2', 'bodies/body2.png', 32, 32);

  // points to '/assets/npcs' folder and retrieves image
  game.image('sign', 'sign.png'); 
  game.image('rails', 'rails.png'); 

  // automatically load any images in the 'image' folder 
}

export function onCreate(game) 
{
  /*
  *   PLAYER FUNCTIONS
  */

  // game.debug.collisions = true; 
  game.debug.colliders = true; 

  // generates and adds Player game object at map location based on spawn point added in Tiled. 
  let player = game.player;

  // player.head.set('head'); 
  // sets player's head and body sprites based on names in onBoot()
  player.head('head');
  player.body('body2');
  // sets the player's x position to 690 and y to 630
  player.move(490, 630); 
  // sets player's direction, can be 'up', 'down', 'left' or 'right'
  player.dir('left');

  /*
  *   NPC FUNCTIONS
  */

  // NPC(x, y, filename, message) 
  let npc1 = new game.NPC(140, 955, 'sign', 'Hello World1!');
  let npc2 = new game.NPC(140, 955, 'sign', 'Hello World2!'); 

  // sets the NPC's x position to 900 and y to 755
  npc1.move(900, 755);
  // sets the x, y dimensions of the NPC's collider box 
  npc1.collider(40, 40);
} 

export function onUpdate(game) {
  // build your own pathfinding algorithm!

}