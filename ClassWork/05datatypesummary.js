//symbol
/*const another_id =symbol ("123");
console.log(typeof(another_id));

//==is used to check datatype as well as equal to simlutaneously
const id =symbol('123');
console.log(id ===another_id);*/

//js is the dynamic

//array:
const arr =["shravani","neha","trupti","taslima"];
console.log(arr[0]);
const arr1=[1,2,3,4,5,6,7,8,9];
// for ( i=0;i<arr.length;i++)
// {
//     console.log(arr1);
// }
 console.log(arr1);

//obj: it is instance of class
const obj ={
    fname:"shra",
    age :20
};
console.log(obj);

//function : it is a block of code used to execute a specific task
//declaration:
//defination :
  function function_name(){
    console.log("shravani");
}
   // to store function in avariable
    const variable_name = function function_name(){
    console.log("shra");
    }

    /*memory 
    2 types of memory -

    1)stack primitive datatype - num int 
    2) heap non-primitive datatype - obj array function */

   // ex
    let myNewYtChannel ="SSP"
    let newYtChannel = "myNewChannel"
    console.log(myNewYtChannel,newYtChannel)

    newYtChannel ="shravani"
    console.log(myNewYtChannel,newYtChannel) // primitive datatype are used for stack memory when  we assign 1 var to another copy is made so changing one cannot affect the other 

    let user1={
      fname:"shravani",
      age:20,
      id:7
    }

    let user2=user1
    user2.id=25
    console.log(user1.id)
    console.log(user2.id) //non-primitive datatype obj are stored in heap memory when we assign 1 obj to another variable reference is copied not the value if the change 1 both will change