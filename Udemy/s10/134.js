const luf = {
    airline : 'Luf',
    iataC : 'LH',
    booking : [],
    book(fNum,name){
        console.log(
            `${name} booked a sent  on ${this.airline} flight ${this.iataC}${fNum}`
        );
        this.booking.push({flight : `${this.iataC}${fNum}`,name});
    }
}
luf.book(213,'Le Hung');

const eur = {
    name : 'Hieu',
    iataC : 'GA',
    booking : [],
}
const book = luf.book;

book.call(eur,23,'Hieu');
console.log(eur);

const swiss = {
    airline : 'HOI',
    iataC : 'ER',
    booking : [],
}
book.call(swiss, 4535 , 'HOI1' );
console.log(swiss);
////
const bookEW = book.bind(eur);
const bookLH = book.bind(luf);
const bookLX = book.bind(swiss);

bookEW(23,'Hung');

const bookEW23 = book.bind(eur,23);
bookEW23('HIEU');

luf.planes = 300;
luf.buyPlane = function () {
      console.log(this);
      this.planes++;
      console.log(this.planes);
}

//document
//    .querySelector('.buy')
//    .addEventListener('click', luf.buyPlane.bind(luf));

const addTax = (rate,value) => value  + value * rate;
console.log(addTax(0.1,242));
const addVAT = addTax.bind(null,0.23);

console.log(addVAT(100));

const addTaxRate = function(rate){
    return function(value){
        return value  + value  * rate; 
    }
}
const addVAT2  = addTaxRate(0.34);
console.log(addVAT2(67));