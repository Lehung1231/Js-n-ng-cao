const run1 = function () {
    console.log('Ko chay lai');
}
run1();
  (function () {
    console.log('Ko chay lai ');
    const isP = 23 ;
  })();

(() => console.log('Se chay lai'))();  

{
    const isP = 23;
    var notP = 46;
}
console.log(notP);