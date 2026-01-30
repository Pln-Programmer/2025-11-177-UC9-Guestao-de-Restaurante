import "dotenv/config"
import express from "express"
import sequelize from "./src/config/dataBase.js"
import MesaRoutes from "./src/modules/mesas/routes/Mesas.routes.js"
import CardapioRoutes from "./src/modules/cardapio/routes/Cardapio.routes.js"
import UsuarioRoutes from "./src/modules/usuarios/routes/Usuario.routes.js"
import UsuarioController from "./src/modules/usuarios/controllers/Usuario.controller.js"

const app = express()
const port = process.env.PORT

app.use(express.json())

app.post("/", UsuarioController.criarAdmin)
app.use("/mesa", MesaRoutes)
app.use("/cardapio", CardapioRoutes)
app.use("/usuario", UsuarioRoutes)

app.get("/", (req,res) =>{
    res.status(200).json({msg:"Bem Vindo!"})
})

app.listen(port, async ()=>{
    await sequelize.sync({ force: true, alter: true });
    console.log(`http://localhost:${port}`)
})

