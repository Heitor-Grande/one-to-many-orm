//express
const express = require("express")
const app = express()

//porta servidor
app.listen("8080", function(){
    console.log("Servidor rodando")
})

//body-parser
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))

//db
const database = require("./db/dbconnection")
database.authenticate().then(function(){
    try {
        console.log("conectado ao db com sucesso")
    } catch (error) {
        console.log(error)
    }
})

//url products
const product = require("./controllers/product")
app.get("/products", product)
app.post("/add", product)

//url user
const user = require("./controllers/user")
app.get("/AllUsers", user)
app.post("/addUser", user)
app.get("/pedidosUsers", user)
app.get("/pedidosUsers/:user_id", user)

//order
const order = require("./controllers/order")
app.post("/addOrder/:id_user", order)
app.get("/AllOrders", order)