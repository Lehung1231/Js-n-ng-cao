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
const arr = [1,2,...[3,4]];
const [a,b,...other] = [1,2,3,4,5];
console.log(a,b,other);

const [qua , pizza, ...otherFood] = [
    ...test.mainMenu,
    ...test.strarterMenu,
]
console.log(qua,pizza,otherFood);
//
const {sat , ...weekdays} = test.openingHours;
console.log(weekdays);
//
const add = function (...number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++)
    sum  += number[i];
    console.log(sum);
}
add(1,2);
add(5,6,7);
add(11,42,12);
//
const x = [23,5,2];
console.log(...x);
//
test.OrderPizza('Toa,Hoa,Qua');
test.OrderPizza("Hiyf")