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

const question  = new Map([
    ['question','Ban hoc ngon ngu nao '],
    [1,'C'],
    [2,'Jv'],
    [3,'Js'],
    ['connect',3],
    [true,'Ok'],
    [false,'LamLai'],
]);
console.log(question);
console.log(Object.entries(test.openingHours));
const HouseMap = new Map(Object.entries(test.openingHours));
console.log(HouseMap);

console.log(question.get('question'));
for(const [key,value] of question){
    if(typeof key == 'number') console.log(`Answer ${key} : ${value}`);
}
const answer = Number(prompt('Answer cua bn ?'));
console.log(answer);

console.log(question.get(question.get('connect') === answer ));
console.log(...question);