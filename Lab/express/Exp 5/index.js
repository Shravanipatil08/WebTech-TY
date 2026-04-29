const express = require("express")
const app = express()
const port = 3000

app.get("/",(req,res)=>{
    const date = new Date()
    res.json({mess:"Hello",cuttTime:date})
})

app.listen(3000,()=> console.log(`Server started on port ${port}`))