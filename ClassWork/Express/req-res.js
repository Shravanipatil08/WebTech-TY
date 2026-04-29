//handling request and response.
//express app handels HTTP requests and responses.
// req = object contain information about the client request.
// ex- URLs,Headers,Query Params,Request Body.
// res = the response object sends data back to the client.
// methods: 1.res.send() 2.res.json() send json. 3.res.status() check HTTP status. 4.res.sendFile()

const express = require("express")
const app = express()

app.get("/",(req,res) => {
    console.log("Started ....."); 
    res.send("Welcome to request and response.")
})

app.get("/getData",(req,res) => {
    const date = new Date()
    res.json({mess:"Hello Welcome",Time:date})
})

//query params
app.get("/user",(req,res) => {
    console.log(req.query.name); // ?param ex. ?name 3-4 examples.
    res.send(`<h2>${req.query.name}</h2>`)
})

app.listen(3000,()=> console.log("Server Started on 3000 port ....."))
