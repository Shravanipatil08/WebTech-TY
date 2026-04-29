const express = require("express")
const app = express()
const port = 3000

app.use((req,res,next) => {
    console.log("Requested URL:",req.url)
    next()
})

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.get("/about",(req,res) => {
    res.send("About Us Page....!")
})

app.listen(port,() => {
    console.log("Server Started")
})