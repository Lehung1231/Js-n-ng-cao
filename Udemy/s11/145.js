const curre = new Map([
  ['USD' ,'Man'],
  ['EUR','Euro'],
  ['GBP','Po'],
]);

curre.forEach(function(value,key,map){
    console.log(`${key} : ${value}`);
});

const curre1 = new Set(['USD','GBP','USD','EUR','EUR']);
console.log(curre1);

curre1.forEach(function(value,_,map){
    console.log(`${value} : ${value}`);
});

