const express = require("express")
const app = express()
const port = 3000

const userData = [
    { "id": 1, "name": "Atharv", "role": "Backend Developer" },
    { "id": 2, "name": "Shravani", "role": "Frontend Developer" },
    { "id": 3, "name": "Arya", "role": "Full Stack Developer" },
    { "id": 4, "name": "Saklen", "role": "DevOps Engineer" },
    { "id": 6, "name": "Om", "role": "Cloud Enginner" },
    { "id": 7, "name": "Kaushal", "role": "Angular Frontend Dev" }
]

app.use((req, res, next) => {
    console.log("URL Hit = ", req.url)
    next()
})

app.get("/", (req, res) => {
    res.send("Home Page")
})

app.get("/user", (req, res) => {
    res.json(userData)
})

app.get("/user/:id",(req,res) => {
    const user_id = parseInt(req.params.id)
    const userInfo = userData.find(user => user.id === user_id)
    if(userInfo)
    {
        res.json(userInfo)
    }
    else
    {
        res.sendStatus(404)
    }
})

app.listen(port, () => console.log(`Server Started on port ${port}`))