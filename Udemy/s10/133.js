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