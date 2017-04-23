import * as PIXI from 'pixi.js';




interface Scene
{
	init() : void;
	update() : void;
	renderScene() : void;
}
interface GraphicObject
{
	position : PIXI.Point;
	anchor : number;
	rotation: number;
	width: number;
	height: number;
}

class GameObject implements GraphicObject
{
	position : PIXI.Point;
	anchor : number;
	rotation: number;
	width: number;
	height: number;

	render() : void
	{

	}
}

abstract class GameScene implements Scene
{
	constructor()
	{
		this.init();
	}
	init() : void
	{

	}
	update() : void
	{

	}
	renderScene() : void{

	}
}

class SceneManager
{
	scenes : Scene[];
	constructor()
	{

	}
}

class Worm extends GameObject
{

	constructor()
	{
		super();
	}
	update()
	{

	}
	render()
	{

	}
}

//game starts here
class FunkadelicWorm extends GameScene
{
	//main character
	worm : Worm;

	constructor()
	{
		super();
	}
	init() : void
	{
		
	}
	update() : void
	{

	}
	renderScene() : void
	{

	}
}

class GameEngine
{
	gameDivId : string = "gameDiv";
	application : PIXI.Application;

	renderer : PIXI.WebGLRenderer | PIXI.CanvasRenderer;
	stage : PIXI.Container;

	bunny : PIXI.Sprite;

	static sceneManager : SceneManager = new SceneManager();

	constructor()
	{
		//create view
		this.application = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
		document.getElementById(this.gameDivId).appendChild(this.application.view);


		this.initGameLoop();		
	}

	initGameLoop() : void
	{
		this.bunny = PIXI.Sprite.fromImage('sprites/bunny.png');
		this.bunny.anchor.set(0.5);

		// move the sprite to the center of the screen
		this.bunny.x = this.application.renderer.width / 2;
		this.bunny.y = this.application.renderer.height / 2;
		this.bunny.rotation = 1;

		this.application.stage.addChild(this.bunny);

		let bunny = this.bunny;

		// Listen for animate update
		this.application.ticker.add(function(delta : number, ) : void {
			//if forced to keep animate static, give pointer to objects
			GameEngine.animateBunny(delta, bunny);
		});
	}



	static animateBunny(delta : number, bunny : PIXI.Sprite) : void
	{
		bunny.rotation += 0.1 * 1;
	}
}

let gameEngine = new GameEngine();