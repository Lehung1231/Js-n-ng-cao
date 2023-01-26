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

console.log('Hung+HIEU+AD+dfasd'.split('+'));
console.log('Hung ADADAD'.split(' '));

const [a,b] = 'Hieu affaa'.split(' ');

const newD = ['MS.', a , b.toUpperCase()].join(' ');
console.log(newD);

const lName = function(name){
    const names = name.split(' ');
    const nameU = [];

    for (const n  of names){
        nameU.push(n.replace(n[0] , n[0].toUpperCase()));
    }
    console.log(nameU.join(' '));
}
lName('SADAF diDFDS');


const message = 'D toi 45';
console.log(message.padStart(20,'+').padEnd(30,'+'));
console.log('Hung'.padStart(20,'+').padEnd(30,'+'));


const Ccard = function(number){
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}
console.log(Ccard(3455234));
console.log(Ccard(343546758567546435));
console.log(Ccard('32132453546454254453'));