/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _marked = [idMaker].map(regeneratorRuntime.mark);
	
	function idMaker() {
	  var index;
	  return regeneratorRuntime.wrap(function idMaker$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          index = 0;
	
	        case 1:
	          if (false) {
	            _context.next = 6;
	            break;
	          }
	
	          _context.next = 4;
	          return index++;
	
	        case 4:
	          _context.next = 1;
	          break;
	
	        case 6:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this);
	}
	
	var gen = idMaker();
	
	console.log(gen.next().value); // 0
	console.log(gen.next().value); // 1
	console.log(gen.next().value); // 2

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTNmNGY3NWVmNTM5MWIwZmQ5Zjc/ZmM3YyIsIndlYnBhY2s6Ly8vLi9nZW5lcmF0b3IuanMiXSwibmFtZXMiOlsiaWRNYWtlciIsImluZGV4IiwiZ2VuIiwiY29uc29sZSIsImxvZyIsIm5leHQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7O2dCQUVVQSxPOztBQUFWLFVBQVVBLE9BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ01DLGdCQUROLEdBQ2MsQ0FEZDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsa0JBR1VBLE9BSFY7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1BLEtBQUlDLE1BQU1GLFNBQVY7O0FBRUFHLFNBQVFDLEdBQVIsQ0FBWUYsSUFBSUcsSUFBSixHQUFXQyxLQUF2QixFLENBQStCO0FBQy9CSCxTQUFRQyxHQUFSLENBQVlGLElBQUlHLElBQUosR0FBV0MsS0FBdkIsRSxDQUErQjtBQUMvQkgsU0FBUUMsR0FBUixDQUFZRixJQUFJRyxJQUFKLEdBQVdDLEtBQXZCLEUsQ0FBK0IsSSIsImZpbGUiOiJnZW5lcmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlM2Y0Zjc1ZWY1MzkxYjBmZDlmNyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uKiBpZE1ha2VyKCl7XHJcbiAgdmFyIGluZGV4ID0gMDtcclxuICB3aGlsZSh0cnVlKVxyXG4gICAgeWllbGQgaW5kZXgrKztcclxufVxyXG5cclxudmFyIGdlbiA9IGlkTWFrZXIoKTtcclxuXHJcbmNvbnNvbGUubG9nKGdlbi5uZXh0KCkudmFsdWUpOyAvLyAwXHJcbmNvbnNvbGUubG9nKGdlbi5uZXh0KCkudmFsdWUpOyAvLyAxXHJcbmNvbnNvbGUubG9nKGdlbi5uZXh0KCkudmFsdWUpOyAvLyAyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2VuZXJhdG9yLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==