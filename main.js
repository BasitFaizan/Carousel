let main = document. querySelector('.main'). children;
let carousel = document.getElementsByClassName('carousel');
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let i = 0;
if(i ===0){
  left.classList.add('active');
}
else if(i>0){
  left.classList.remove('active');
}
right.addEventListener('click',function(){
  
  carousel[i].style.left = '-50%';
  i++;
  carousel[i].style.left = '50%';
  if(i>=4){
    right.classList.toggle('active');
    
  }
  if (i === 0) {
  left.classList.add('active');
}
else if (i > 0) {
  left.classList.remove('active');
}
});
left.addEventListener('click',function(){
  carousel[i].style.left = '150%';
  i--;
  carousel[i].style.left = '50%';
  if (i === 0) {
    left.classList.add('active');
  }
  else if (i > 0) {
  right.classList.remove('active');
}
})