/**
 * RENDER
 * Render the view with requestAnimationFrame on specified event.
 *
 * @param {event} type Listen for specified event
 * @param {node} elem Element to check the event against
 * @param {function} callback Function to run as a callback
 * @param {bool} capture Propagating event
 */

(function (root) {

	'use strict';

	var RENDER = function RENDER(type, elem, callback, capture) {
		var animate = window.requestAnimationFrame;
		var ticking = false;

		// Only call animate when update is ready:
		var requestRender = function requestRender() {
			if (!ticking) {
				animate(update);
				ticking = true;
			}
		};

		// Update the render callback:
		var update = function update() {
			callback();

			// Reset the tick, so we can capture the next event with requestRender:
			ticking = false;
		};

		// Listen for specified event:
		elem.addEventListener(type, requestRender, !!capture);
	};

	root.render = RENDER;
})(window);