const marvelHeroes = ['thor', 'ironman', 'spiderman'];
const dcHeroes = ['superman', 'batman', 'flash'];

// marvelHeroes.push(dcHeroes);

// console.log(marvelHeroes);

// console.log(marvelHeroes[3]);

// console.log(marvelHeroes[3][2]);

// newHeroes = marvelHeroes.concat(dcHeroes);

// console.log(newHeroes);

// const allNewHeroes = [...marvelHeroes, ...dcHeroes];

// console.log(allNewHeroes);

// const array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [1, 2, 3]]];

// const usableArray = array.flat(Infinity);

// console.log(usableArray);

console.log(Array.isArray('Anshuman'));

console.log(Array.from('Anshuman'));

console.log(Array.from({ name: 'Anshuman' })); // ---- interview

let s1 = 100;
let s2 = 200;
let s3 = 300;

console.log(Array.of(s1, s2, s3));
