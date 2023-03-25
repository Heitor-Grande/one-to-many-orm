//express
const express = require("express")
const user = express()

//model user
const modelUser = require("../models/user")

//model order
const modelOrder = require("../models/order")

//post
user.post("/addUser", function(req, res){
    let {name, email, gender, cpf, 
        cellphone, password} = req.body

        modelUser.create({
            name: name,
            email: email,
            gender: gender,
            cpf: cpf, 
            cellphone: cellphone,
            password: password
        }).then(function(){
            res.redirect("/AllUsers")
        })

})

//get
user.get("/AllUsers", function(req, res){
    modelUser.findAll().then(function(users){
        res.send(users)
    })
})

//user  -> pedidos
user.get("/pedidosUsers", function(req, res){
    modelOrder.findAll({include: {model: modelUser}}).then(function(pedidos){
        res.send(pedidos)
    })
})

user.get("/pedidosUsers/:user_id", function(req, res){

    let user_id = req.params.user_id

    modelOrder.findAll({include: {model: modelUser, where:{
        id: user_id
    }}}).then(function(pedidos){
        res.send(pedidos)
    })
})


module.exports = user