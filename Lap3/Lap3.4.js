//1.
const dogs = [
  {
    name: "Max",
    weight: 20,
    owner: ["Sarah", "John"],
    foodAmount: 400
  },
  {
    name: "Buddy",
    weight: 15,
    owner: ["Michael"],
    foodAmount: 200
  },
  // ... more dog objects
];

dogs.forEach(dog => {
  dog.recommendedFood = dog.weight ** 0.75 * 28;
});
//2.
const sarahDogs = dogs.filter(dog => dog.owner.includes("Sarah"));
sarahDogs.forEach(dog => {
  if (dog.foodAmount > dog.recommendedFood) {
    console.log(`${dog.name} eats too much!`);
  } else if (dog.foodAmount < dog.recommendedFood) {
    console.log(`${dog.name} eats too little!`);
  }
});
//3.
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];

dogs.forEach(dog => {
  if (dog.foodAmount > dog.recommendedFood) {
    ownersEatTooMuch.push(...dog.owner);
  } else if (dog.foodAmount < dog.recommendedFood) {
    ownersEatTooLittle.push(...dog.owner);
  }
});
//4.
console.log(`${[...new Set(ownersEatTooMuch)].join(" and ")}'s dogs eat too much!`);
console.log(`${[...new Set(ownersEatTooLittle)].join(" and ")}'s dogs eat too little!`);
//5.
let someDogsEatJustRight = false;
dogs.forEach(dog => {
  if (Math.abs(dog.foodAmount - dog.recommendedFood) < 0.1 * dog.recommendedFood) {
    someDogsEatJustRight = true;
  }
});
console.log(someDogsEatJustRight);
//6.
let someDogsEatWithinRange = false;
dogs.forEach(dog => {
  if (dog.foodAmount <= dog.recommendedFood * 1.1 && dog.foodAmount >= dog.recommendedFood * 0.9) {
    someDogsEatWithinRange = true;
  }
});
console.log(someDogsEatWithinRange);
//7.
const wellFedDogs = dogs.filter(dog => {
  return (
    dog.foodAmount <= dog.recommendedFood * 1.1 && dog.foodAmount >= dog.recommendedFood * 0.9
  );
});
console.log(wellFedDogs);