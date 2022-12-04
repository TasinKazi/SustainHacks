let score = 100;
let questions = document.getElementsByClassName('active')[0];
console.log(questions);

let responses = questions.firstChild.nextElementSibling.firstElementChild;
console.log(responses)
let a;

const addListen = (responses) => {
while(responses) {
  a = responses.children;
  console.log(responses);
  for(let i = 0; i < a.length; i++){
  
    a[i].addEventListener('change', (e) => {
  let o = e.target;  
      
      let x =o.parentElement.parentElement.parentElement;
    x.classList.remove('active'); 
    x.classList.add('hidden'); 
      if(x.nextElementSibling){
    x.nextElementSibling.classList.remove('hidden');
    x.nextElementSibling.classList.add('active');
      
  }
    else{
        let f =document.getElementsByClassName('list');
        f[f.length-1].classList.toggle('hidden');
      }})
  }
  
  responses = responses.nextElementSibling;
}}

while(questions.classList.contains('list')){
console.log((questions))
let responses = ((questions.children)[0].nextElementSibling.children)[0];
  console.log(responses);
  console.log(responses);
addListen(responses);
if(questions.nextElementSibling){
questions = questions.nextElementSibling;}
  else break;
}
/* let me try to create a function that gives the final score*/


function scoreFunction() {
  let o = document.querySelector('input[name="device"]:checked').value;
  let p = document.querySelector('input[name="recycle"]:checked').value;
  let q = document.querySelector('input[name="upcycle"]:checked').value;
  let r = document.querySelector('input[name="friendly"]:checked').value;
  let s = document.querySelector('input[name="shower"]:checked').value;
  let t = document.querySelector('input[name="baths"]:checked').value;  
let a=  parseInt(o) + parseInt(p) + parseInt(q) + parseInt(r) + parseInt(s) + parseInt(t);
  score+=a;

//will add  questions and try doing the css
  let ind = 0; // index
  document.getElementById("finalScore").innerHTML = `You scored: ${score}`
  document.getElementsByClassName('score')[0].classList.toggle('hiddenScore')
  document.getElementsByClassName('btn')[0].classList.toggle('hidden');
  if (score>75){
    ind = 3;
    let partyMode = document.getElementById('toggle');
        partyMode.classList.toggle('hidden')
        document.getElementsByTagName('body')[0].style.background = "black";
        document.getElementsByClassName('container')[0].style.background= 'linear-gradient(0deg, #000000 0%, #bf4090 100%)';

  }
  else if (score >50) {
    ind = 2;
  }
  else if (score > 25) {
    ind = 1;
  }
  document.getElementsByClassName('x')[ind].classList.toggle('hidden')
}

// #bf409