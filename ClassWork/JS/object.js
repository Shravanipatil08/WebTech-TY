//there are two types of obj
// 1. obj literals - can not create singleton obj
//2. obj constructor - create singleton obj
//3.singleton obj - when you create constructor its create singleton obj,it means itself obj

//1.obj literal (key value pair)
let myObj={ 
name :"shra",
age : 20,
location :"sangli",
email :"patil@gmail.com",
islogin :true,
lastlogin : ["monday","tuesdat"],
'fn': "shravani",
//[mysymbol]:"mysymbol key "
}
console.log(myObj)
console.log(myObj.name)
console.log(myObj.age)
console.log(myObj.email)
console.log(myObj.location)
console.log(myObj.islogin)
console.log(myObj.lastlogin)
//console.log(typeof (myObj [mysymbol]))

//------
//myObj.email="shravani@gmail.com"
//console.log(myObj)
// Object.freeze(myObj)
// myObj.email="shra@gmail.com"
// console.log(myObj)

/*Symbol example
const mySymbol = Symbol("mySymbolKey");
const myobj2 = {
    [mySymbol] : "ShraPatil"
};
console.log(myobj2);
console.log(myobj2[mySymbol]);
console.log(typeof myobj2[mySymbol]);*/


//obj in function
myObj.greeting =function(){
    console.log("hello js users ") 
}
console.log(myObj.greeting())

