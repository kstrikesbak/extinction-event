const newOl = document.querySelectorAll('.app ol li')

function lineThru(event){
event.target.style.textDecoration = 'line-through'
}
function olEventListenerLoop () {
   for (let i=0;i<newOl.length;i++) {
   newOl[i].addEventListener('click',lineThru);
}
}
olEventListenerLoop()

const newUl = document.querySelectorAll('ul li')

function invisible(event){
event.target.style.opacity = '0'
}
function ulEventListenerLoop () {
   for (let i=0;i<newUl.length;i++) {
   newUl[i].addEventListener('click',invisible);
}
}
ulEventListenerLoop()



// const thirdUlLis = document.querySelectorAll('#thirdUl li');

// function makesInvisible(event){
//     event.target.style.display = 'none';
// }
// document.querySelector('ul').addEventListener('click', makesInvisible)
// document.querySelector('#hide-me-area').style.display = 'none'
// for (let i = 0; i < firstUlLis.length; i++) {
//   firstUlLis[i].innerText = `${firstUlLis[i].innerText} ${i + 1}`;
// }

// const secondUlLis = document.querySelectorAll('#secondUl li');

// for (let i = 0; i < secondUlLis.length; i++) {
//   if (i % 2 === 1) {
//     secondUlLis[i].style.backgroundColor = 'lightblue';
//   }
// }

// const thirdUlLis = document.querySelectorAll('#thirdUl li');

// for (let i = 0; i < thirdUlLis.length; i++) {
//   if (i % 2 === 0) {
//     thirdUlLis[i].style.textDecoration = 'line-through';
//   }
// }