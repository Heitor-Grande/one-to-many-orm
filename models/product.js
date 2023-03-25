//sequelize
const sequelize = require("sequelize")

//db
const database = require("../db/dbconnection")

//model product

const product = database.define("products", {
    title: {
        type: sequelize.TEXT
    },
    amount: {
        type: sequelize.REAL
    },
    stock: {
        type: sequelize.INTEGER
    }
})

module.exports = product