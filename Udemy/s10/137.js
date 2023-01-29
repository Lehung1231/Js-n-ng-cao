const Sbooking = function () {
    let passC = 0 ;
    return function(){
        passC ++;
        console.log(`${passC} pass`);
    };
};
const booker = Sbooking();
booker();
booker();
booker();

console.dir(booker);