const left = document.getElementById("left");
const right = document.getElementById("right");

// ================= LEFT SIDE (1–5) =================
left.innerHTML += "<h3>Activity 1: Array, Function & Object</h3>";
let newArray = [10, 20, 30, 40, 50];
left.innerHTML += "Array : " + newArray + "<br>";
left.innerHTML += "Type : " + typeof newArray + "<hr>";

function greet(name) {
    left.innerHTML += "Hello, " + name + "<br>";
}
greet("Shravani");
left.innerHTML += "Type of Function : " + typeof greet + "<hr>";

let student = { name: "Shravani", age: 20, address: "Sangli" };
for (let key in student) {
    left.innerHTML += key + " : " + student[key] + "<br>";
}
left.innerHTML += "Type of Object : " + typeof student + "<hr>";

left.innerHTML += "<h3>Activity 2: Largest Number in String</h3>";
let nums = "10 45 23 89 12".split(" ").map(Number);
left.innerHTML += "Largest : " + Math.max(...nums) + "<hr>";

left.innerHTML += "<h3>Activity 3: Reverse Number</h3>";
let numStr = "12345";
left.innerHTML += "Reverse : " + numStr.split("").reverse().join("") + "<hr>";

left.innerHTML += "<h3>Activity 4: Count Vowels</h3>";
let text = "JavaScript";
let count = 0;
for (let ch of text) {
    if ("aeiouAEIOU".includes(ch)) count++;
}
left.innerHTML += "Vowels : " + count + "<hr>";

left.innerHTML += "<h3>Activity 5: Palindrome</h3>";
let pal = "121";
// left.innerHTML += pal === pal.split("").reverse().join("") ? "Palindrome" : "Not Palindrome";
left.innerHTML += pal === pal.split("").reverse().join("") ? pal + " is Palindrome" : pal + " is not Palindrome";


// ================= RIGHT SIDE (6–10) =================
right.innerHTML += "<h3>Activity 6: Fibonacci Series</h3>";
let a = 0, b = 1;
right.innerHTML += a + " " + b + " ";
for (let i = 2; i < 7; i++) {
    let c = a + b;
    right.innerHTML += c + " ";
    a = b;
    b = c;
}
right.innerHTML += "<hr>";

right.innerHTML += "<h3>Activity 7: Largest Element in Array</h3>";
let arr = [5, 12, 9, 21, 3];
right.innerHTML += "Largest : " + Math.max(...arr) + "<hr>";

right.innerHTML += "<h3>Activity 8: Remove Duplicates</h3>";
let dup = [1, 2, 2, 3, 4, 4, 5];
right.innerHTML += "Unique : " + [...new Set(dup)] + "<hr>";

right.innerHTML += "<h3>Activity 9: Missing Number</h3>";
let missArr = [1, 2, 3, 5];
let total = 15;
let sum = missArr.reduce((a, b) => a + b, 0);
right.innerHTML += "Missing : " + (total - sum) + "<hr>";

right.innerHTML += "<h3>Activity 10: Even or Odd</h3>";
let num = 10;
right.innerHTML += num + " is " + (num % 2 === 0 ? "Even" : "Odd");

right.innerHTML += "<h3>Activity 11: Sum of Array</h3>"
let sumArr = [10, 20, 30];
function sumOfArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
right.innerHTML += "Sum of Array : " + sumOfArray(sumArr)