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

const reset = new Map();
reset.set('name','Class');
reset.set(1,'Hung');
console.log(reset.set(2,'Hieu'));

reset
   .set('Cate',['Ita','Piz','Vege'])
   .set('open',11)
   .set('close',12)
   .set(true,'Mo cua')
   .set(false,'Dong cua');

console.log(reset.get('name'));
console.log(reset.get(true));
console.log(reset.get(1));   

const time = 8 ;
console.log(reset.get(time > reset.get('open') && time < reset.get('close')));
console.log(reset.has('Cate'));
reset.delete(2);
console.log(reset);
console.log(reset.size);

