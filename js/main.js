/* eslint-disable no-undef */

const $canvas = document.querySelector('canvas');
const game = new Game($canvas);

const canvasWidth = $canvas.width;
const canvasHeight = $canvas.height;

window.onload = game.homeGame();

// window.onload = game.startGame();

// window.onload = function() {
//   document.getElementById("amazon").onclick = function() {
//   game.startMaze(amazon);
//   document.getElementById("barbarian").onclick = function() {
//     game.startMaze(barbarian);
//   };
// };
