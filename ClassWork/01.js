//array
let myarr=[0,1,2,3,4,5,6,7,8];
console.log(`myarr ${myarr}`);

console.log(typeof myarr);

const arr = new Array(0,1,2);
console.log(arr[1]);

//arrayb methods
arr.push(8); // add elemenet to the end
console.log(arr);

arr.pop(); // remocve last value from array 
console.log(arr);

arr.unshift(-1); // add element to the begining of array=
console.log(arr);

arr.shift();
console.log(arr);

console.log(arr.includes(2));
console.log(arr.includes(9));

console.log(arr.indexOf(2));
console.log(arr.indexOf(9));



