import "dotenv/config"
import express from "express"
import sequelize from "./src/config/DataBase.js"

const app = express()
const port = process.env.PORT

app.use(express.json())

app.get("/", (req,res) =>{
    res.status(200).json({msg:"Bem Vindo!"})
})

app.listen(port, async ()=>{
    await sequelize.sync({ force: true, aleter: true });
    console.log(`http://localhost:${port}`)
})