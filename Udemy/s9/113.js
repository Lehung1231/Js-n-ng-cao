const test = {
    name :  'Hung',
    location : 'Ha Noi',
    categories : ['VietNam','HoChiMinh','DaNang'],
    like : ['code','eat'],
    strarterMenu : ['Qua','Kho','Diet'],
    mainMenu : ['Piza','Pasta'],
    openingHours : {
       2 : {
            open : 12,
            close : 22,
        },
        3: {
            open : 13,
            close : 24
        },
        4 : {
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

if(test.openingHours && test.openingHours.mon)
console.log(test.openingHours.mon.open);

console.log(test.openingHours.mon?.open);
console.log(test.openingHours?.mon?.open);

const days =['2','3','4','5','6','7','8'];
for (const day of days ){
    const open = test.openingHours[day]?.open || 'Close';
    console.log(`Thứ ${day}, Chúng tôi mở vào ${open} giờ`);
}

console.log(test.order?.(0,1) ??  'Ko co');
console.log(test.order1?.(0,1) ??  'Ko co');

const users = [{name : 'hung' , email : 'hungnono'}];
console.log(users[0]?.name ?? 'User ko tồn tại');
if(users.lenght > 0) console.log(users[0]?.name); else console.log('User có tồn tại ');