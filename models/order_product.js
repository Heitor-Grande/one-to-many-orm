//sequelize
const sequelize = require("sequelize")

//db
const database = require("../db/dbconnection")

//model product
const product = require("./product")

//model order
const order = require("./order")

//model order_product
const order_product = database.define("order_products", {
    
})


//vincular order_product - order
order_product.belongsTo(order, {
    constraint: true,
    foreignKey: "order_id"
})

//vincular order_product - product
order_product.belongsTo(order, {
    constraint: true, 
    foreignKey: "product_id"
})

module.exports = order_product

