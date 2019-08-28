/* eslint-disable no-undef */

// AMAZON 

// Play audio
var audioAmazon = new Audio('./..//sounds/amazon.mp3');
function playAmazonSound() {
  audioAmazon.play();
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

// Play audio
var audioBarbarian = new Audio('./..//sounds/barbarian.mp3');
function playBarbarianSound() {
  audioBarbarian.play();
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
