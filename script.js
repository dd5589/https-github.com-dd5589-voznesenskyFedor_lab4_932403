const username = prompt("Как вас зовут?")
if(username){alert("Привет! " + username+" Посмотри статистику фото!");}
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
function findMax(arr1){
  let max=arr[0];
  for (let i=0;i<arr.length;i++){
    if (arr[i]>max){max=arr[i];}
  }
  return max;
}
const maxPhotos = findMax(photos);
console.log("Максимум фото за день:", maxPhotos);
