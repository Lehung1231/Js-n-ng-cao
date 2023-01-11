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
    }
}

const arr = [1,2,4];
const arr1 = [5,6,arr[0],arr[1],arr[2]];
console.log(arr1);
//
const newarr = [5,6,...arr];
console.log(newarr);
console.log(...newarr);
//
const newMenu = [...test.mainMenu, 'Tao'];
console.log(newMenu);
//
const menu = [...test.mainMenu,...test.strarterMenu];
console.log(menu);
//
const str = "Hung";
const letter = [...str,'','Le'];
console.log(letter);
console.log(str);
//
//const goimon = [
//    prompt("Món 1 : "),
 //   prompt("Món 2 : ")
//];

//test.nhapOrder(goimon[0],goimon[1]);
//test.nhapOrder(...goimon);

const newTest = { lap : 1988 , ...test , nhanhvien : 'Hung123' };
console.log(newTest);

const testCopy = {...test};
testCopy.name = 'Hungvoich';
console.log(testCopy.name);
console.log(test.name);