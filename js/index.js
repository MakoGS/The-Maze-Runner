/* eslint-disable no-undef */
var audioAmazon = new Audio('./..//sounds/amazon.mp3');
function playAmazonSound() {
  audioAmazon.play();
}

var audioBarbarian = new Audio('./..//sounds/barbarian.mp3');
function playBarbarianSound() {
  audioBarbarian.play();
}


const $barbarianImage = document.getElementById('barbarian-intro');

$barbarianImage.addEventListener('mouseover', (e) => {
  $barbarianImage.style.cursor = "pointer";
  playBarbarianSound()
  $barbarianImage.src="./../img/barbarian/barbarian-intro.png";
})
$barbarianImage.addEventListener('mouseout', (e) => {
  $barbarianImage.src="./../img/barbarian/barbarian-intro-bw.png";
})
$barbarianImage.addEventListener('click', (e) =>  {
  playBarbarianSound()
  game.showCanvasScreen('barbarian')
});


const $amazonImage = document.getElementById('amazon-intro');

$amazonImage.addEventListener('mouseover', (e) => {
  $amazonImage.style.cursor = "pointer";
  playAmazonSound()
  $amazonImage.src="./../img/Amazon/amazon-intro.png";
})
$amazonImage.addEventListener('mouseout', (e) => {
  $amazonImage.src="./../img/Amazon/amazon-intro-bw.png";
})
$amazonImage.addEventListener('click', (e) => {
  playAmazonSound()
  game.showCanvasScreen('amazon')
});

window.addEventListener("load", function() {
  var f = document.getElementById('player');
  setInterval(function() {
      f.style.display = (f.style.display == 'none' ? '' : 'none');
  }, 1000);

}, false);

