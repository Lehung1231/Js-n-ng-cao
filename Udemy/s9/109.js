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
const rest1 = {
    name : 'Hung',
  //  numGuest : 23,
  numGuest : 0,
};
const rest2 = {
    name : 'Hung1',
    owner : 'Hieu1',
};
//rest1.numGuest = rest1.numGuest || 10;
//rest2.numGuest = rest2.numGuest || 10;

//rest1.numGuest ||= 10;
//rest2.numGuest ||= 10;

rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

//rest2.owner = rest2.owner && 'Hungwfad';
//rest1.owner = rest1.owner && 'Hungwfad';

rest1.owner &&= 'Hungwfad';
rest2.owner &&= 'Hungwfad';
console.log(rest1);
console.log(rest2);
