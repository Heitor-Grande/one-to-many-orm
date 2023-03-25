//sequelize
const sequelize = require("sequelize")

//db
const database = require("../db/dbconnection")

//model user
const user = require("./user")

//model order
const orders = database.define("orders", {
    total_amout:{
        type: sequelize.REAL
    }
})

//vinvular order - usuario
orders.belongsTo(user, {
    constraint: true, 
    foreignKey: "user_id"
})

module.exports = orders