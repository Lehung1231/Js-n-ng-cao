const movements = [23,434,-23,45,-75,-87];
const account1 = {
    name :'hung1',
    movements : [213,34,54,23,-453,-44],
    inter : 1.4,
    pin : 1111
};

const account2 = {
   name :'hung2',
   movements : [23,354,12,243,-4443,-4423],
   inter : 1.6,
   pin : 1123
};     

const account3 = {
   name :'hung3',
   movements : [1323,342,534,2343,-4353,-4344],
   inter : 1.8,
   pin : 1231
};     

const account4 = {
   name :'hung4',
   movements : [863,39,549,273,-4853,-474],
   inter : 1.1,
   pin : 1324
};     

const accounts = [account1,account2,account3,account4];

const eurToUsd = 1.1;

const tota = movements
   .filter(mov => mov < 0)
   .map((mov,i,arr) => {
    console.log(arr);
    return mov * eurToUsd;
   })
   .reduce((acc,mov) => acc + mov , 0);
console.log(tota);
