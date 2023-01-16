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

const properties = Object.keys(test.openingHours);
console.log(properties);

let  openStr = `Mo vao ${properties.length} ngay `;
for (const day of properties){
    openStr += ` ${day}`;
}
console.log(openStr);

//for (const day of Object.keys(test.openingHours)){
//    console.log(day);
//}

const values = Object.values(test.openingHours);
console.log(values);

const entries = Object.entries(test.openingHours);
//console.log(entries);
for (const [key , {open,close}] of entries){
    console.log(`Vao ${key} mo  vao ${open} dong vao ${close} `);
}