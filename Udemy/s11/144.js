const move = [12,33,434,5,12,-32,-45];

for(const move1 of move) {
    if(move1 > 0){
        console.log(`Ban dc ${move1}`);
    }else{
        console.log(`Ban mat ${move1}`);
    }
}
// foreach
move.forEach(function (move1) {
    if(move1 > 0){
        console.log(`Ban dc ${move1}`);
    }else{
        console.log(`Ban mat ${Math.abs(move1)}`);
    }
});