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
    }
}



const { name : testName , openingHours : openTest, categories : CateTet } = test;
console.log(testName,openTest,CateTet);
//
let a = 111 ;
let b = 222 ;
const so =  { a : 23 , b : 7 , c : 14};
({a,b} = so); // Có  dấu "()" bao quanh
console.log(a,b);
//
const{
    fri: {open : o,close : c},
} = test.openingHours;
console.log(o,c);
// 
test.orderOb({
    time : '11.25',
    address : 'HaNoi ',
    mainIndex : 1,
    startIndex :1,
});