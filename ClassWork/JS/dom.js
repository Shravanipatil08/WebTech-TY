//dom - Document Object Model
//is the bridge between JS & HTML
//it is a programming interface for html
//when browser loads an html page ,it converts html into an obj that obj structures is called DOM
//js uses DOM to read,changes,edit,add,delete HTML elemenets

//why DOM comes -> advanced methods does not handle javascript 

// window -> Documents -> Html ->Head -> Title, meta
//                             ->Body -> div -> h1,h2 ,input 

document.getElementById("title")
let txt =document.getElementById("title")
txt.innerHTML="DOM learning with Shra"
document.getElementById("title").innerHTML="<h1>SHRAVANI PATIL</h1>"
document.getElementById("title").innerHTML="DOM learning with <h1>SHRAVANI PATIL</h1>"

//DOM tags
document.getElementById("title")
document.getElementById("title").class
document.getElementById("title").className
document.getElementById("title").setAttribute
document.getElementById("title").getAttribute


//activity 1 use of all dom tags given above
//activity 2 queryselector and queryselectorall use
//activity 3 using js and dom develop small project