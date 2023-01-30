const movements = [23,434,-23,45,-75,-87];
const EU = 1.1;

const moveUSD =  movements.map(function (mov){
    return mov * EU;
});
console.log(movements);
console.log(moveUSD);

const moveUSDF = [];
for (const mov of movements) moveUSDF.push(mov * EU);
console.log(moveUSDF);

// const movementD = movements.map((mov,i,arr) => {
//     if(mov > 0){
//         return `Movement ${i + 1} : DE ${mov}`;
//     }else {
//         return `Movement ${i + 1} : WI ${Math.abs(mov)}`;
//     }
// });
const movementD = movements.map((mov,i) => 
`Movement ${i+1} : You ${mov > 0 ? 'Lon hon' : 'Nho hon'} ${Math.abs(mov)}`
);
console.log(movementD);
