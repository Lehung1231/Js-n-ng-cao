const test = {
    name :  'Hung',
    location : 'Ha Noi',
    categories : ['VietNam','HoChiMinh','DaNang'],
    like : ['code','eat'],
    strarterMenu : ['Qua','Kho','Diet'],
    mainMenu : ['Piza','Pasta'],
    openingHours : {
        thu : {
            open : 12,
            close : 22,
        },
        fri : {
            open : 13,
            close : 24
        },
        sat : {
            open : 14,
            close : 22,
        }
    },
    order : function(startIndex,mainIndex){
        return [this.strarterMenu[startIndex], this.mainMenu[mainIndex]];
    },
    orderOb : function({startIndex,mainIndex,time,address}){
        console.log(`Bắt đầu : ${this.strarterMenu[startIndex]} và Main : ${this.mainMenu[mainIndex]} , thời gian ${time} , địa chỉ ${address} `);
    },
    nhapOrder : function(ing1,ing2){
        console.log(`Qúy khách đã gọi ${ing1} và ${ing2} `);
    },
    OrderPizza : function(mainI,...otherI){
       console.log(mainI);
       console.log(otherI);
    }
}

const dai = 'Ai biet j dau';
const ngan = 'B147';

console.log(ngan[0]);
console.log(ngan[1]);
console.log(ngan[2]);
console.log('C256'[0]);
console.log(dai.length);
console.log('C256'.length);

console.log(dai.indexOf('t'));
console.log(dai.lastIndexOf('t'));
console.log(dai.indexOf('dau'));

console.log(dai.slice(4));
console.log(dai.slice(4,7));

console.log(dai.slice(0,dai.indexOf(' ')));
console.log(dai.slice(0,dai.lastIndexOf(' ') + 1));

console.log(dai.slice(-2));
console.log(dai.slice(1,-1));

const check = function(seat){
    const s = seat.slice(-1);
    if(s === 'B' || s === 'C') console.log(' Co ');
    else console.log('Ko Co');
}

check('32N');
check('31B');
check('37l');