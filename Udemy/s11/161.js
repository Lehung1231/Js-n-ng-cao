const movements = [23,434,-23,45,-75,-87];
console.log( movements);
console.log( movements.includes(-130));

console.log(movements.some(mov => mov === -130));

const anyDe = movements.some(mov => mov  > 1500);
console.log(anyDe);