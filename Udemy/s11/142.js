let arr = ['a', 'b','c', 'd','e'];
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-1));
console.log(arr.slice());
console.log(...arr);


arr = ['a', 'b','c', 'd','e'];
const arr2 = ['j', 'i','h', 'g','f'];
console.log(arr2.reverse());
console.log(arr2);

const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr,...arr2);