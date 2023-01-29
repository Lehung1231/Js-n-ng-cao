let x;
const y = function () {
    const a = 10;
    x = function (){
        console.log(a *  2);
    }
}
const z = function () {
    const b = 242;
    x = function (){
        console.log(b *  2);
    }
}
y();
x();
console.dir(x)
z();
x();
console.dir(x);
//

const bPass = function (n,wait) {
    const pGroup = n/3;
    setTimeout(function () {
        console.log(`${n} pass`);
        console.log(`${pGroup} pass`);
    },wait * 1000);
    console.log(`Bat dau sau ${wait} giay`);
}
bPass(180,4);