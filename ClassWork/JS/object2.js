//creates singleton obj
const user1=new Object
console.log(user1);

//non singleton obj
const user2={}

user2.id=111
user2.name="shravani"
user2.login =true

console.log(user2);

//obj inside the obj

const user3={
    email:"shravani@gmail.com",
    userName:{

        fullname :{
            fname:"shra",
            sname:"patil"
        }

    }
}
console.log(user3);

console.log(user3.userName.fullname.fname);
