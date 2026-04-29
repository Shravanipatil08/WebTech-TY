const express =require ("express")
const app =express()
const port =3000


app.request((req,res,next)=> {
    res.send(req,url)
    next()
})

app.get("/",(req,res)=>{
    res.send({id:1})
})

app.listen(3000,()=>{

})
