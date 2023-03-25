//express
const express = require("express")
const product = express()

//model product
const modelProduct = require("../models/product")

//post
product.post("/add", function(req, res){
    let {title, amount, stock} = req.body

    modelProduct.create({
        title: title,
        amount: amount,
        stock: stock
    }).then(function(){
        res.redirect("/products")
    })
})

//get
product.get("/products", function(req, res){
    modelProduct.findAll().then(function(products){
        res.send(products)
    })
})

//get

module.exports = product