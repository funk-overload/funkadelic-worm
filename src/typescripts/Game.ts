import * as PIXI from 'pixi.js';




interface Scene
{
	Init() : void;
	Update(delta : number) : void;
	Render() : void;
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
		this.Init();
	}
	Init() : void
	{

	}
	Update(delta : number) : void
	{

	}
	Render() : void{

	}

	AddRenderObject(obj : any) : void
	{
		GameEngine.application.stage.addChild(obj);
	}
}

class SceneManager
{
	scenes : Scene[];
	constructor()
	{
		this.scenes = new Array();
	}

	Init()
	{
		//setup gameloop
		GameEngine.application.ticker.add(function(delta : number) : void {
			GameEngine.sceneManager.UpdateScenes(delta);
			GameEngine.sceneManager.RenderScenes();
		});
	}

	UpdateScenes(delta : number)
	{
		// console.log("scenes updated");
		for (let scene of this.scenes) {
			scene.Update(delta);
		}
	}

	// not needed?
	RenderScenes()
	{
		// console.log("funkworm rendered");
		for (let scene of this.scenes) {
			scene.Render();
		}
	}

	AddScene(scene : Scene)
	{
		this.scenes[this.scenes.length] = scene;
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
		console.log("funkworm rendered");
	}
}



//game starts here
class FunkadelicWorm extends GameScene
{
	//main character
	worm : Worm;

	bunny : PIXI.Sprite;

	g : PIXI.Graphics;

	points : PIXI.Point[];


	count = 0;
	// build a rope!
	ropeLength = 918 / 20;		

	constructor()
	{
		super();
	}
	Init() : void
	{
		console.log("init funkadelic worm");

		this.bunny = PIXI.Sprite.fromImage('sprites/bunny.png');
		this.bunny.anchor.set(0.5);

		this.bunny.x = GameEngine.application.renderer.width / 2;
		this.bunny.y = GameEngine.application.renderer.height / 2;

		// GameEngine.application.stage.addChild(this.bunny);
		this.AddRenderObject(this.bunny);


		//rope tests
		var count = 0;
	
		this.points = new Array();

		for (var i = 0; i < 25; i++) {
		    this.points.push(new PIXI.Point(i * this.ropeLength, 0));
		}



		var strip = new PIXI.mesh.Rope(PIXI.Texture.fromImage('sprites/bunny.png'), this.points);

		strip.x = -40;
		strip.y = 300;

		this.AddRenderObject(strip);


		this.g = new PIXI.Graphics();
		this.g.x = strip.x;
		this.g.y = strip.y;

		this.AddRenderObject(this.g);
	}
	Update(delta: number) : void
	{
		this.bunny.rotation += 0.1 * delta;


		this.count += 0.1;

	    // make the snake
	    for (var i = 0; i < this.points.length; i++) {
	        this.points[i].y = Math.sin((i * 0.5) + this.count) * 30;
	        this.points[i].x = i * this.ropeLength + Math.cos((i * 0.3) + this.count) * 20;
	    }
	}
	Render()
	{
		this.g.clear();

	    this.g.lineStyle(2,0xffc2c2);
	    this.g.moveTo(this.points[0].x, this.points[0].y);

	    for (var i = 1; i < this.points.length; i++) {
	        this.g.lineTo(this.points[i].x, this.points[i].y);
	    }

	    for (var i = 1; i < this.points.length; i++) {
	        this.g.beginFill(0xff0022);
	        this.g.drawCircle(this.points[i].x, this.points[i].y,10);
	        this.g.endFill();
	    }
	}
}



class GameEngine
{
	gameDivId : string = "gameDiv";
	renderer : PIXI.WebGLRenderer | PIXI.CanvasRenderer;
	// stage : PIXI.Container;

	static application : PIXI.Application;
	static sceneManager : SceneManager = new SceneManager();

	constructor()
	{
		//create view
		GameEngine.application = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
		document.getElementById(this.gameDivId).appendChild(GameEngine.application.view);

		//add whatever scene youre interested in
		GameEngine.sceneManager.AddScene(new FunkadelicWorm());

		this.Init();		
	}

	Init() : void
	{
		GameEngine.sceneManager.Init();
	}
}

//create the gameengien instance
let gameEngine = new GameEngine();