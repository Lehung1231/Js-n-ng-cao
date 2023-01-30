const checkDog = function(dogH,dogK){
    const dogHC = dogH.slice();
    dogH.slice(0,1);
    dogH.slice(-2);

    const dog =  dogHC.concat(dogK);
    console.log(dog);

    dog.forEach(function(dog,i){
        if(dog >= 3){
            console.log(`Dog number  ${i + 1} la duc,  va ${dog} tuoi`);
        }else{
            console.log(`Dog number  ${i + 1}  la cho con`);
        }
    })
}
checkDog([1,3,4,5],[5,7,2,6])