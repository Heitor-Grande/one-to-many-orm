//express
const express = require("express")
const order = express()

//model order
const modelOrder = require("../models/order")

//model product
const modelProduct = require("../models/product")

//model order_product
const order_product = require("../models/order_product")

//post
order.post("/addOrder/:id_user", function(req, res){
    let user_id = req.params.id_user

    let id_produto = req.body.id_produto
    let quantidade = req.body.quantidade

    if(id_produto.length > 1){
        let amount_total = 0
        for(let i = 0; i < id_produto.lenght; i = i + 1){
            modelProduct.findAll({where: {
                id: id_produto[i]
            }}).then(function([product]){
                amount_total = product.amount * quantidade[i]
            })
        }

        modelOrder.create({
            total_amout: amount_total,
            user_id: user_id
        }).then(function(){
            
        })

    }
    else{
        modelProduct.findAll({where: {
            id: id_produto,
        }}).then(function([product]){

            console.log(product)

            let amount_total = product.amount * quantidade

            modelOrder.create({
                total_amout: amount_total,
                user_id: user_id
            }).then(function(){
                modelOrder.findAll({where: {
                    user_id: user_id, 
                    total_amout: amount_total
                }}).then(function([order]){
                    order_product.create({
                        order_id: order.id,
                        product_id: id_produto
                    }).then(function(){
                        res.redirect("/AllOrders")
                    })
                })
            })

        })
    }
})

order.get("/AllOrders", function(req, res){
    modelOrder.findAll().then(function(orders){
        res.send(orders)
    })
})

module.exports = order