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

  const RENDER = (type, elem, callback, capture) => {
    const animate = window.requestAnimationFrame;
    let ticking = false;

    // Only call animate when update is ready:
    const requestRender = () => {
      if (!ticking) {
        animate(update);
        ticking = true;
      }
    };

    // Update the render callback:
    const update = () => {
      callback();

      // Reset the tick, so we can capture the next event with requestRender:
      ticking = false;
    };

    // Listen for specified event:
    elem.addEventListener(type, requestRender, !!capture);
  }

  root.render = RENDER;

})(window);
