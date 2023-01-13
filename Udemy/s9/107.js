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
console.log(4 || 'Hung');
console.log('' || 'Hung');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'hung' || 23 || null);

test.num = 0;
const num1 = test.num ? test.num : 10;
console.log(num1);

const num2 = test.num || 10;
console.log(num2);

console.log('VÀ');
console.log(0 && 'Hung');
console.log(7 && 'Hung');
console.log('hi' && 23 && null  && 'Hung');