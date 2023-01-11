const test = {
    name :  'Hung',
    location : 'Ha Noi',
    categories : ['VietNam','HoChiMinh','DaNang'],
    like : ['code','eat'],
    strarterMenu : ['Qua','Kho','Diet'],
    mainMenu : ['Piza','Pasta'],
    order : function(startIndex,mainIndex){
        return [this.strarterMenu[startIndex], this.mainMenu[mainIndex]];
    }
}
const arr = [1,2,3];
const [x,y,z] = arr;
console.log(x,y,z);
//
let [first, ,second] = test.categories;
console.log( first,second );
//
[first,second] = [second,first];
console.log(first,second);
//
const [starter, main] =   test.order(2,0);
console.log(starter,main);
//
const nested = [1,2,[5,6]];
const [i,,[j,k]] = nested;
console.log(i,j,k);
//
const [h,u,p = 1] = [8,9]; 
console.log(h,u,p);