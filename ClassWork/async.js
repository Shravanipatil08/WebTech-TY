// Two types of execution/programming in JavaScript : synchronous and asynchronous

// 1. synchronous -----
// code excute line by line 
// each task wait to previous task to complete before the next one start
// nature - blocking event
// js by default synchronous and single threaded

console.log("start")
let add=(n1,n2)=>{
    return n1+n2
}
let result =add(18,15)
console.log("result-",result)
console.log("END!")

/*asynchronous in js :
some task takes time like api usercallback,file ReadableByteStreamController,timer add, db data 
js does not wait it moves to next line  
non blocking behaviour
used in -
- fetching data from server 
- reading Files
- set timeout 
- api calls
*/

console.log("start")
//fetching data or setting time takes time to execute that's why we use settimeout()
setTimeout(()=>{
    console.log("inside the setTimeOut");

},2000)
console.log("END!!")

//SeTimeOut is asynchronous it takes 2 seconds to execute so first end statement will execute and then setTimeOut()will execute 

/*activities
1.guess the o/p Game
2.blocking and non blocking ex
3.async and sync use in realtime
4.api fetch
*/