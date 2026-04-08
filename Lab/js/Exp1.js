const a = 100;
// a = 200;
console.log(a)

{
    var b = 50;
    let c = 70;
}
console.log(b);
// console.log(c);

//Activity no.01 ->
//display student information

let studentName = "Shravani";
let studentAge = 20;
let rollNo = 317;
let Branch = "AIML";
let email = "patilshravani602@gmail.com"

console.log("Student Name: " + studentName);
document.writeln("Student Name: " + studentName + "<br>");
console.log("Student Age: " + studentAge);
document.writeln("Student Age: " + studentAge + "<br>");
console.log("Roll No: " + rollNo);
document.writeln("Roll No: " + rollNo + "<br>");
console.log("Branch: " + Branch);
document.writeln("Branch: " + Branch + "<br>");
console.log("Email: " + email);
document.writeln("Email: " + email + "<br>");


//Activity no.02 ->
//checking even or odd number
let number = 7;
if (number % 2 == 0){
    console.log(number + " is even number"); 
    document.writeln(""+number + " is even number" + "<br>");    
}else{
    console.log(number + " is odd number")
    document.writeln(number + " is odd number" + "<br>");
}

//Activity no.03 ->
//check student pass or fail
let marks = 85;
if (marks >= 35){
    console.log("Student is pass");
    document.writeln("Student is pass" + "<br>");
}else{
    console.log("Student is fail");
    document.writeln("Student is fail" + "<br>");
}

//Activity no.04 ->
//print no from 1 to 10 using loop
for (let i = 1; i<=10; i++){
    console.log(i);
    document.writeln(i + "<br>");
}

//Activity no.05 ->
let x = 10;
let y = x;
x = 20;
console.log(x);
document.writeln(x + "<br>");
console.log(y);
document.writeln(y + "<br>");