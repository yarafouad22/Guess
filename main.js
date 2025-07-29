'use strict'
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='🎉 correct answer';
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=20;
// document.querySelector('.Guess').value=17;
// console.log( document.querySelector('.Guess').value=17);

let number =Math.trunc(Math.random() * 20)+1;
let score=20;
let highscore=0;

document.querySelector('.again').addEventListener('click',function(){
   number =Math.trunc(Math.random() * 20)+1;
    let score=20;
  document.querySelector('.message').textContent='starting...';
  score;
  document.querySelector('.number').textContent='?'
  document.querySelector('.Guess').value=''
   document.querySelector('body').style.backgroundColor='#222'
 document.querySelector('.high-score').textContent=0;
   
})


document.querySelector('.check').addEventListener('click',function(){
    const guess=document.querySelector('.Guess').value
    console.log(guess);
    if(!guess){
        document.querySelector('.message').textContent='❌no number';
    }else if(guess==number) {
        document.querySelector('.message').textContent='🎉 correct answer';
        document.querySelector('.number').textContent=number
        document.querySelector('body').style.backgroundColor='#008000'
        if (score>highscore){
            highscore=score;
            document.querySelector('.high-score').textContent=highscore
        }
}else if(guess>number) {
    if(score>1){
        document.querySelector('.message').textContent='🔺to high';
        score--
        document.querySelector('.score').textContent=score
    }else{
         document.querySelector('.message').textContent='😪 you lost the game';
         document.querySelector('body').style.backgroundColor='red'
    }
    }else if(guess<number) {
        if(score>1){
         document.querySelector('.message').textContent='🔻to low';
         score--
         document.querySelector('.score').textContent=score
     }else{
         document.querySelector('.message').textContent='😪 you lost the game';
           document.querySelector('body').style.backgroundColor='red'
    } }
})
