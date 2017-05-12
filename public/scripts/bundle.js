/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = PIXI;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(0);
var GameObject = (function () {
    function GameObject() {
    }
    GameObject.prototype.render = function () {
    };
    return GameObject;
}());
var GameScene = (function () {
    function GameScene() {
        this.Init();
    }
    GameScene.prototype.Init = function () {
    };
    GameScene.prototype.Update = function (delta) {
    };
    GameScene.prototype.Render = function () {
    };
    GameScene.prototype.AddRenderObject = function (obj) {
        GameEngine.application.stage.addChild(obj);
    };
    return GameScene;
}());
var SceneManager = (function () {
    function SceneManager() {
        this.scenes = new Array();
    }
    SceneManager.prototype.Init = function () {
        GameEngine.application.ticker.add(function (delta) {
            GameEngine.sceneManager.UpdateScenes(delta);
            GameEngine.sceneManager.RenderScenes();
        });
    };
    SceneManager.prototype.UpdateScenes = function (delta) {
        for (var _i = 0, _a = this.scenes; _i < _a.length; _i++) {
            var scene = _a[_i];
            scene.Update(delta);
        }
    };
    SceneManager.prototype.RenderScenes = function () {
        for (var _i = 0, _a = this.scenes; _i < _a.length; _i++) {
            var scene = _a[_i];
            scene.Render();
        }
    };
    SceneManager.prototype.AddScene = function (scene) {
        this.scenes[this.scenes.length] = scene;
    };
    return SceneManager;
}());
var Worm = (function (_super) {
    __extends(Worm, _super);
    function Worm() {
        return _super.call(this) || this;
    }
    Worm.prototype.update = function () {
    };
    Worm.prototype.render = function () {
        console.log("funkworm rendered");
    };
    return Worm;
}(GameObject));
var FunkadelicWorm = (function (_super) {
    __extends(FunkadelicWorm, _super);
    function FunkadelicWorm() {
        var _this = _super.call(this) || this;
        _this.count = 0;
        _this.ropeLength = 918 / 20;
        return _this;
    }
    FunkadelicWorm.prototype.Init = function () {
        console.log("init funkadelic worm");
        this.bunny = PIXI.Sprite.fromImage('sprites/bunny.png');
        this.bunny.anchor.set(0.5);
        this.bunny.x = GameEngine.application.renderer.width / 2;
        this.bunny.y = GameEngine.application.renderer.height / 2;
        this.AddRenderObject(this.bunny);
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
    };
    FunkadelicWorm.prototype.Update = function (delta) {
        this.bunny.rotation += 0.1 * delta;
        this.count += 0.1;
        for (var i = 0; i < this.points.length; i++) {
            this.points[i].y = Math.sin((i * 0.5) + this.count) * 30;
            this.points[i].x = i * this.ropeLength + Math.cos((i * 0.3) + this.count) * 20;
        }
    };
    FunkadelicWorm.prototype.Render = function () {
        this.g.clear();
        this.g.lineStyle(2, 0xffc2c2);
        this.g.moveTo(this.points[0].x, this.points[0].y);
        for (var i = 1; i < this.points.length; i++) {
            this.g.lineTo(this.points[i].x, this.points[i].y);
        }
        for (var i = 1; i < this.points.length; i++) {
            this.g.beginFill(0xff0022);
            this.g.drawCircle(this.points[i].x, this.points[i].y, 10);
            this.g.endFill();
        }
    };
    return FunkadelicWorm;
}(GameScene));
var GameEngine = (function () {
    function GameEngine() {
        this.gameDivId = "gameDiv";
        GameEngine.application = new PIXI.Application(800, 600, { backgroundColor: 0x1099bb });
        document.getElementById(this.gameDivId).appendChild(GameEngine.application.view);
        GameEngine.sceneManager.AddScene(new FunkadelicWorm());
        this.Init();
    }
    GameEngine.prototype.Init = function () {
        GameEngine.sceneManager.Init();
    };
    return GameEngine;
}());
GameEngine.sceneManager = new SceneManager();
var gameEngine = new GameEngine();


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map