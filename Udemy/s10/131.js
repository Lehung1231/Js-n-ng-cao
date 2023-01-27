const oneW = function(str){
    return str.replace(/ /g,'').toLowerCase();
};
const Uword = function(str){
    const [first,...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

const trans =  function(str , fn ){
    console.log(`1 chuoi  :  ${str}`);
    console.log(`Trans :  ${fn(str)}`);
    console.log(`Trans by :  ${fn.name}`);

};
trans('Js la trum ',Uword)