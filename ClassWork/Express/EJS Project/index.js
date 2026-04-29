const express = require("express")
const app = express()
const port = 3000

app.set("view engine","ejs")

app.get("/",(req,res) => {
    res.render("index",{name:"Atharv",age:20})
})

app.listen(port,() => console.log(`Server Started on port ${port} ....`))