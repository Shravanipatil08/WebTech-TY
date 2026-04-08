const superHero=[
    "Spiderman",
    "Batman",
    "Ironman",
    "Thor",
    "Captain america"
];

const villains=["Lex luthor",
    "Thanos",
    "Loki",
    "Green goblin"];

superHero.push(villains);
console.log(superHero);

console.log(superHero[3]);
console.log(superHero[5][2]);

const mynewArray = superHero.concat(villains);
console.log(mynewArray);

const anotherArray =[1,2,3,[4,5,6],7,[6,7,[4,5]]];
console.log(anotherArray);

const anotherArray1 = anotherArray.flat(Infinity); //flattens all nested arrays
console.log(anotherArray1);

const anotherArray2 = anotherArray.flat(1); //flattens only one level of nested array
console.log(anotherArray2);

// how the nested array should be flattend default is 1.

// Infinity flattens all the levels no matters how deep the nasting is  

//flat() doesn't change the original array it returns a new array . useful for nested arrays within arrays.

//data scripting using this array
console.log(Array.isArray("shravani")); //check given value is an array or not

console.log(Array.from("trupti")); //converts an itertable obj like string , map, set into anarray

console.log(Array.from({name : 'trupti'}));

console.log(Object.keys({name:'trupti'}));
console.log(Object.values({name:'trupti'}));

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));

//create new array from given value no m,atters how many diff betn array from -> convers iteratable  and array.of -> converts value