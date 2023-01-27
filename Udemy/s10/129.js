const flight = 'Hung12';
const jonas = {
    name : 'Hieu',
    pass : 213123213
}
const check = function(Num,pss){
    Num = 'HA3243';
    pss.name = 'MS.' + pss.name;
    if(pss.pass === 213123213){
        alert('Check in ');
    }else{
        alert('Sai');
    }
}
check(flight,jonas);
console.log(flight);
console.log(jonas);

const Npass = function (person){
    person.pass = Math.trunc(Math.random() * 10000);
};
Npass(jonas);
check(flight,jonas);