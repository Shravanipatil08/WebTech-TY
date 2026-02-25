let a=10;
let balance =new Number(100000000000)
console.log(balance,typeof(balance))

console.log(balance.toString())
console.log(balance.toFixed(2)) // where we build pricion value is too long 
console.log(balance.toString().length)

console.log(balance.toLocaleString())
console.log(balance.toLocaleString('en-US')) //english / india in by default

//MATH
console.log(Math)
console.log(Math.abs(-0),Math.abs(-4))//convert -ve to +ve
console.log(Math.round(4.6))
console.log(Math.ceil(4.6)) //top
console.log(Math.floor(4.6)) // lowest value
console.log(Math.min(56,78,78))
console.log(Math.max(34,34,56))

// activity1 Math.random use and code