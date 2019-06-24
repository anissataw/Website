document.addEventListener('DOMContentLoaded', type);
const txtElement = document.querySelector('.typing');
const words = JSON.parse(txtElement.getAttribute('data-words'));

var i = 0;
var txt = '';
var speed = 100;

function type() {
  var fullTxt = words[0];
  if (i <= txt.length) {
    txt += fullTxt.charAt(i);
    i++;
    txtElement.innerHTML = `<span class="txt">${txt}</span>`;
    setTimeout(type, speed);
  }
}