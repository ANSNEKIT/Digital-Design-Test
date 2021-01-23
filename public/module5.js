// Задание 5
const arr = new Array(20);

const fillArray = (min, max) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * (max - min)) + min;;
  }
};

const replaceFromArray = (arr) => {
  arr.forEach((num, i, arr) => {
    num > 0 ? arr[i] = num : arr[i] = 0;
  });
};

const addToArray = (arr) => {
  arr.forEach((num, i, arr) => {
  if (i % 2 === 0 && num === 0) {
    arr.splice(i+1, 0, -1);
  }
  })
};

fillArray(-100, 100);
replaceFromArray(arr);
addToArray(arr);

console.log(arr);