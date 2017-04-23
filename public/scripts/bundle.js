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
        this.init();
    }
    GameScene.prototype.init = function () {
    };
    GameScene.prototype.update = function () {
    };
    GameScene.prototype.renderScene = function () {
    };
    return GameScene;
}());
var SceneManager = (function () {
    function SceneManager() {
    }
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
    };
    return Worm;
}(GameObject));
var FunkadelicWorm = (function (_super) {
    __extends(FunkadelicWorm, _super);
    function FunkadelicWorm() {
        return _super.call(this) || this;
    }
    FunkadelicWorm.prototype.init = function () {
    };
    FunkadelicWorm.prototype.update = function () {
    };
    FunkadelicWorm.prototype.renderScene = function () {
    };
    return FunkadelicWorm;
}(GameScene));
var GameEngine = (function () {
    function GameEngine() {
        this.gameDivId = "gameDiv";
        this.application = new PIXI.Application(800, 600, { backgroundColor: 0x1099bb });
        document.getElementById(this.gameDivId).appendChild(this.application.view);
        this.initGameLoop();
    }
    GameEngine.prototype.initGameLoop = function () {
        this.bunny = PIXI.Sprite.fromImage('sprites/bunny.png');
        this.bunny.anchor.set(0.5);
        this.bunny.x = this.application.renderer.width / 2;
        this.bunny.y = this.application.renderer.height / 2;
        this.bunny.rotation = 1;
        this.application.stage.addChild(this.bunny);
        var bunny = this.bunny;
        this.application.ticker.add(function (delta) {
            GameEngine.animateBunny(delta, bunny);
        });
    };
    GameEngine.animateBunny = function (delta, bunny) {
        bunny.rotation += 0.1 * 1;
    };
    return GameEngine;
}());
GameEngine.sceneManager = new SceneManager();
var gameEngine = new GameEngine();


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map