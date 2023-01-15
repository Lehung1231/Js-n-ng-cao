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

const menu = [...test.strarterMenu, ...test.mainMenu];

for (const item of menu ) console.log(item);


for(const item of menu.entries()){
    console.log(`${item[0] + 1} : ${item[1] }`);
}

