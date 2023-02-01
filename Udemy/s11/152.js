const movements = [23,434,-23,45,-75,-87];


const des = movements.filter(function (mov,i,arr) {
    return mov > 0;
});
console.log(movements);
console.log(des);

const desFor = [];
for (const mov  of movements) if( mov > 0) desFor.push(mov);
console.log(desFor);
const withd = movements.filter(mov => mov > 0);
console.log(withd);