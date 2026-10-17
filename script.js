const username = prompt("Как вас зовут?")
if(username){alert("Привет!" + username+"Посмотри статистику фото!");}
else{alert("Привет, аноним!");}
const photos =[120,200,170,420,50,220];
console.log("Весь массив ",photos);
console.log("Длина массива ",photos.length);
let sum=0;
function sumArray(arr){
  let sum=0;
  for(let i=0;i<photos.length;i++){sum+=arr;}
  return sum;
}
const total = sumArray(photos);
console.log("Общая сумма фото:", total);
