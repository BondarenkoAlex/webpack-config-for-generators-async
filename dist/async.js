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
/***/ function(module, exports) {

	'use strict';
	
	var add1 = function () {
	  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(x) {
	    var a, b;
	    return regeneratorRuntime.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            a = resolveAfter2Seconds(20);
	            b = resolveAfter2Seconds(30);
	            _context.t0 = x;
	            _context.next = 5;
	            return a;
	
	          case 5:
	            _context.t1 = _context.sent;
	            _context.t2 = _context.t0 + _context.t1;
	            _context.next = 9;
	            return b;
	
	          case 9:
	            _context.t3 = _context.sent;
	            return _context.abrupt('return', _context.t2 + _context.t3);
	
	          case 11:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, this);
	  }));
	
	  return function add1(_x) {
	    return _ref.apply(this, arguments);
	  };
	}();
	
	var add2 = function () {
	  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(x) {
	    var a, b;
	    return regeneratorRuntime.wrap(function _callee2$(_context2) {
	      while (1) {
	        switch (_context2.prev = _context2.next) {
	          case 0:
	            _context2.next = 2;
	            return resolveAfter2Seconds(20);
	
	          case 2:
	            a = _context2.sent;
	            _context2.next = 5;
	            return resolveAfter2Seconds(30);
	
	          case 5:
	            b = _context2.sent;
	            return _context2.abrupt('return', x + a + b);
	
	          case 7:
	          case 'end':
	            return _context2.stop();
	        }
	      }
	    }, _callee2, this);
	  }));
	
	  return function add2(_x2) {
	    return _ref2.apply(this, arguments);
	  };
	}();
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function resolveAfter2Seconds(x) {
	  return new Promise(function (resolve) {
	    setTimeout(function () {
	      resolve(x);
	    }, 2000);
	  });
	}
	
	add1(10).then(function (v) {
	  console.log(v); // prints 60 after 2 seconds.
	});
	
	add2(10).then(function (v) {
	  console.log(v); // prints 60 after 4 seconds.
	});

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTNmNGY3NWVmNTM5MWIwZmQ5ZjciLCJ3ZWJwYWNrOi8vLy4vYXN5bmMuanMiXSwibmFtZXMiOlsieCIsImEiLCJyZXNvbHZlQWZ0ZXIyU2Vjb25kcyIsImIiLCJhZGQxIiwiYWRkMiIsIlByb21pc2UiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwidiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7Ozt3REFVQSxpQkFBb0JBLENBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNNQyxjQUROLEdBQ1VDLHFCQUFxQixFQUFyQixDQURWO0FBRU1DLGNBRk4sR0FFVUQscUJBQXFCLEVBQXJCLENBRlY7QUFBQSwyQkFHU0YsQ0FIVDtBQUFBO0FBQUEsb0JBR21CQyxDQUhuQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUc2QkUsQ0FIN0I7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEk7O21CQUFlQyxJOzs7Ozs7eURBVWYsa0JBQW9CSixDQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNnQkUscUJBQXFCLEVBQXJCLENBRGhCOztBQUFBO0FBQ01ELGNBRE47QUFBQTtBQUFBLG9CQUVnQkMscUJBQXFCLEVBQXJCLENBRmhCOztBQUFBO0FBRU1DLGNBRk47QUFBQSwrQ0FHU0gsSUFBSUMsQ0FBSixHQUFRRSxDQUhqQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJOzttQkFBZUUsSTs7Ozs7OztBQWxCZixVQUFTSCxvQkFBVCxDQUE4QkYsQ0FBOUIsRUFBaUM7QUFDL0IsVUFBTyxJQUFJTSxPQUFKLENBQVksbUJBQVc7QUFDNUJDLGdCQUFXLFlBQU07QUFDZkMsZUFBUVIsQ0FBUjtBQUNELE1BRkQsRUFFRyxJQUZIO0FBR0QsSUFKTSxDQUFQO0FBS0Q7O0FBUURJLE1BQUssRUFBTCxFQUFTSyxJQUFULENBQWMsYUFBSztBQUNqQkMsV0FBUUMsR0FBUixDQUFZQyxDQUFaLEVBRGlCLENBQ0E7QUFDbEIsRUFGRDs7QUFVQVAsTUFBSyxFQUFMLEVBQVNJLElBQVQsQ0FBYyxhQUFLO0FBQ2pCQyxXQUFRQyxHQUFSLENBQVlDLENBQVosRUFEaUIsQ0FDQTtBQUNsQixFQUZELEUiLCJmaWxlIjoiYXN5bmMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlM2Y0Zjc1ZWY1MzkxYjBmZDlmNyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIHJlc29sdmVBZnRlcjJTZWNvbmRzKHgpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgcmVzb2x2ZSh4KTtcclxuICAgIH0sIDIwMDApO1xyXG4gIH0pO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBhZGQxKHgpIHtcclxuICB2YXIgYSA9IHJlc29sdmVBZnRlcjJTZWNvbmRzKDIwKTtcclxuICB2YXIgYiA9IHJlc29sdmVBZnRlcjJTZWNvbmRzKDMwKTtcclxuICByZXR1cm4geCArIGF3YWl0IGEgKyBhd2FpdCBiO1xyXG59XHJcblxyXG5hZGQxKDEwKS50aGVuKHYgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHYpOyAgLy8gcHJpbnRzIDYwIGFmdGVyIDIgc2Vjb25kcy5cclxufSk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBhZGQyKHgpIHtcclxuICB2YXIgYSA9IGF3YWl0IHJlc29sdmVBZnRlcjJTZWNvbmRzKDIwKTtcclxuICB2YXIgYiA9IGF3YWl0IHJlc29sdmVBZnRlcjJTZWNvbmRzKDMwKTtcclxuICByZXR1cm4geCArIGEgKyBiO1xyXG59XHJcblxyXG5hZGQyKDEwKS50aGVuKHYgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHYpOyAgLy8gcHJpbnRzIDYwIGFmdGVyIDQgc2Vjb25kcy5cclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXN5bmMuanMiXSwic291cmNlUm9vdCI6IiJ9