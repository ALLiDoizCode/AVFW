var window = Ti.UI.createWindow({
	backgroundColor: 'black',
});

var platino = require('co.lanica.platino');

var game = platino.createGameView();

game.fps = 30;
game.color(0,0,0);
game.debug =true;

var scene = platino.createScene();

var GRAPHICS_DIR = 'assets/';

////Sprite////
var sprite = platino.createSpriteSheet({image:GRAPHICS_DIR + 'Jughead/Jughead_walking.png', width:220, height:220});
scene.add(sprite);

////MAP////
var mapfile = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, GRAPHICS_DIR + 'Jungle.json');
var mapjson = JSON.parse(mapfile.read().toString());

for(var i = 0; i < mapjson.length; i++){
	var mapinfo = {
    image:GRAPHICS_DIR + mapjson.tilesets[i].image,
    tileWidth:mapjson.tilesets[i].tilewidth,
    tileHeight:mapjson.tilesets[i].tileheight,
    border:mapjson.tilesets[i].spacing,
    margin:mapjson.tilesets[i].margin
	};
};

console.log(mapinfo);

// create ground map layer
var map = platino.createMapSprite(mapinfo);

map.width  = map.tileWidth  * mapjson.layers[0].width;
map.height = map.tileHeight * mapjson.layers[0].height;

map.firstgid = mapjson.tilesets[0].firstgid; // tilemap id is started from 'firstgid'
map.tiles = mapjson.layers[0].data;

// on-screen controller and its guides
var vpad = platino.createSprite({image:GRAPHICS_DIR + 'control_base.png'});
var vpad_nav = platino.createSprite({image:GRAPHICS_DIR + 'particle.png'});

vpad_nav.hide();
vpad_nav.color(1, 1,  0);
vpad.alpha = 0.5;

// set z-order
map.z  = 0;
//map_items.z = 1;
sprite.z  = 2;
vpad.z = 3;
vpad_nav.z = 4;

var WINDOW_SCALE_FACTOR_X = 1;
var WINDOW_SCALE_FACTOR_Y = 1;

var isVpadActive = false;
var touchX, touchY;

var updateVpadTimerID = 0;

// Onload event is called when the game is loaded.
game.addEventListener('onload', function(e) {
    // set screen size for your game (non-retina size)
    var screenScale = game.size.width / 320;
    game.screen = {width:game.size.width / screenScale, height:game.size.height / screenScale};
    
    // Your game screen size is set here if you did not specifiy game width and height using screen property.
    // Note: game.size.width and height may be changed due to the parent layout so check them here.
    Ti.API.info("view size: " + game.size.width + "x" + game.size.height);
    Ti.API.info("game screen size: " + game.screen.width + "x" + game.screen.height);
    
   Ti.API.info("map: " + map.width + "x" + map.height);
    
    WINDOW_SCALE_FACTOR_X = game.screen.width  / game.size.width;
    WINDOW_SCALE_FACTOR_Y = game.screen.height / game.size.height;
    
    vpad.x = (game.screen.width * 0.5) - (vpad.width * 0.5);
    vpad.y = game.screen.height - vpad.height;
    
    // Start the game
    game.start();

    // default direction is "RIGHT"
    sprite.direction = "RIGHT";
    sprite.animate(0, 8, 100, -1);
    
    updateVpadTimerID = setInterval(function(e) {
        updateVpad();
    }, 66);
});

// Stop update timer before app is closed
window.addEventListener('android:back', function(e) {
    clearInterval(updateVpadTimerID);
    
    window.close();
});

function updateVpad() {
    if (isVpadActive) {
        var powerX = (touchX - (vpad.x + (vpad.width  * 0.5))) * 0.2;
        var powerY = (touchY - (vpad.y + (vpad.height * 0.5))) * 0.2;
    
        vpad.color(0.78, 0.78, 0.78);
        vpad_nav.x = touchX - (vpad_nav.width  * 0.5);
        vpad_nav.y = touchY - (vpad_nav.height * 0.5);
        vpad_nav.show();
        
        // Change animation of the sprite
        if (sprite.direction == "RIGHT" && powerX < 0) {
            sprite.direction = "LEFT";
            sprite.animate(8, 5, 250, -1);
        } else if (dog.direction == "LEFT" && powerX > 0){
            dog.direction = "RIGHT";
            dog.animate(0, 2, 250, -1);
        }
        
        var nextSpriteX = sprite.x + powerX;
        var nextSpriteY = sprite.y + powerY;
        
        var nextMapX = map.x - powerX;
        var nextMapY = map.y - powerY;
        
        // move sprite and map layers
        
        if (nextSpriteX > 0 && nextSpriteX < game.screen.width  - sprite.width) {
            sprite.x = nextSpriteX;
        } else if (nextMapX <= 0 && nextMapX > -map.width + game.screen.width){
            map.x = nextMapX;
            map_items.x = map.x;
        }
        if (nextpriteY > 0 && nextSpriteY < game.screen.height - sprite.height) {
            sprite.y = nextSpriteY;
        } else if (nextMapY <= 0 && nextMapY > -map.height + game.screen.height){
            map.y = nextMapY;
            map_items.y = map.y;
        }
    
    } else {
        vpad.color(1, 1, 1);
        vpad_nav.hide();
    }
}

// load debug functions
Ti.include("debug.js");

// Add your game view
scene.add(sprite);
scene.add(map);
scene.add(vpad);
scene.add(vpad_nav);
game.pushScene(scene);
window.add(game);
window.open({fullscreen:true, navBarHidden:true});