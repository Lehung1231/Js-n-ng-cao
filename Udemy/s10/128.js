const book = [];

const Cbook = function(   
    Fnum,
    NumB = 2,
    Gia = 50 * NumB){
    const books = {
        Fnum,
        NumB,
        Gia
    };
    console.log(books);
    book.push(books);  
};
Cbook('Hung1223');
Cbook('Hung21',3,90)
Cbook('Hung21',undefined,undefined)