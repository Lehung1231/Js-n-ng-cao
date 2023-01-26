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

console.log(dai.toLowerCase());
console.log(dai.toUpperCase());

const passR = 'HuNg';
const passL = passR.toLowerCase();
const passC = passL[0].toUpperCase()  +  passL.slice(1);
console.log(passC);

const email = 'hung@gmail.io';
const Lemail = 'Hello@hung.Io';
const Wemail = Lemail.toLowerCase();
const Temail = Wemail.trim();
console.log(Temail);


const PGB = '23242,4353&';
const PUS = PGB .replace('&','@').replace(',','.');
console.log(PUS);

const plane = 'AIKHONG BIET GI2334';
console.log(plane.includes('233'));
console.log(plane.includes('AI1s'));
console.log(plane.startsWith('AI'));
console.log(plane.startsWith('AI1'));
if(plane.startsWith('BSC') && plane.endsWith('KHONG')){
    console.log('Khong dc')
}else{
    console.log('DC');
}