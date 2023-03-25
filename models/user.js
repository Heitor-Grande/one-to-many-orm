//sequelize
const sequelize = require("sequelize")

//db
const database = require("../db/dbconnection")

//model user

const user = database.define( "users", {
    name:{
        type: sequelize.TEXT
    },
    email:{
        type: sequelize.TEXT
    },
    gender:{
        type: sequelize.TEXT
    },
    cpf:{
        type: sequelize.TEXT
    },
    cellphone:{
        type: sequelize.TEXT
    },
    password:{
        type: sequelize.TEXT
    }
})

module.exports = user