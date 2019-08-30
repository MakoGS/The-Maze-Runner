/* eslint-disable no-undef */

// var bgx = Math.floor(Math.random() * 256);
// var bgy = Math.floor(Math.random() * 256);
// var bgz = Math.floor(Math.random() * 256);
// var bgColor = "rgb(" + bgx + "," + bgy + "," + bgz + ")";
// console.log(bgColor);


// const $bgCanvas = document.getElementById('canvas');

// $canvas.style.background = bgColor;

// AMAZON 

// Play intro audio
var audioAmazon = new Audio('./..//sounds/amazon.mp3');
function playAmazonSound() {
  audioAmazon.play();
}

//Play Next level Audio
var amazonLevel = new Audio('./..//sounds/amazonlevel.mp3');
function playAmazonLevel() {
  amazonLevel.play();
}

//Play die audio
var amazonDie = new Audio('./..//sounds/amazondie.mp3');
function playAmazonDie() {
  amazonDie.play();
}

//Play enemy audio
var amazonDamage = new Audio('./..//sounds/amazondamage.mp3');
function playAmazonDamage() {
  amazonDamage.play();
}
//Play item audio
var amazonItem = new Audio('./..//sounds/amazonitems.mp3');
function playAmazonItem() {
  amazonItem.play();
}


const $amazonImage = document.getElementById('amazon-intro');

//Mouseover change image
$amazonImage.addEventListener('mouseover', (e) => {
  $amazonImage.style.cursor = "pointer";
  playAmazonSound()
  $amazonImage.src="./../img/Amazon/amazon-intro.png";
})

//Mouseout change image
$amazonImage.addEventListener('mouseout', (e) => {
  $amazonImage.src="./../img/Amazon/amazon-intro-bw.png";
})

//OnClick start canvas
$amazonImage.addEventListener('click', (e) => {
  playAmazonSound()
  game.showCanvasScreen('amazon')
});

//BARBARIAN 

// Play Intro audio
var audioBarbarian = new Audio('./..//sounds/barbarian.mp3');
function playBarbarianSound() {
  audioBarbarian.play();
}

//Play Next level Audio
var barbarianLevel = new Audio('./..//sounds/barbarianlevel.mp3');
function playBarbarianLevel() {
  barbarianLevel.play();
}

//Play die audio
var barbarianDie = new Audio('./..//sounds/barbariandie.mp3');
function playBarbarianDie() {
  barbarianDie.play();
}

//Play enemy audio
var barbarianDamage = new Audio('./..//sounds/barbariandamage.mp3');
function playBarbarianDamage() {
  barbarianDamage.play();
}
//Play item audio
var barbarianItem = new Audio('./..//sounds/barbarianitems.mp3');
function playBarbarianItem() {
  barbarianItem.play();
}

const $barbarianImage = document.getElementById('barbarian-intro');

//Mouseover change image
$barbarianImage.addEventListener('mouseover', (e) => {
  $barbarianImage.style.cursor = "pointer";
  playBarbarianSound()
  $barbarianImage.src="./../img/barbarian/barbarian-intro.png";
})

//Mouseout change image
$barbarianImage.addEventListener('mouseout', (e) => {
  $barbarianImage.src="./../img/barbarian/barbarian-intro-bw.png";
})

//OnClick start canvas
$barbarianImage.addEventListener('click', (e) =>  {
  playBarbarianSound()
  game.showCanvasScreen('barbarian')
});

//RESTART GAME
const $reset = document.getElementById('reset');
const $restart = document.getElementById('restart');

// $restart.addEventListener('click', (e) =>  {
//   game.reset();
//   game.hideScreen('gameover');
// });

$reset.addEventListener('click', (e) =>  {
  game.reset();
});