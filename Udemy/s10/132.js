const great = function  (greating){
    return function ( name ){
        console.log(`${greating} ${name}`);
    };
};
const greatH = great('Hi');
greatH('Hung');
greatH('Hieu');
great('Hi')('Hadasd');

const greatA = greating => name  => console.log(`${greating} ${name}`);
greatA('Hi')('Had');