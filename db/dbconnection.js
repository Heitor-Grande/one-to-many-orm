//sequelize
const sequelize = require("sequelize")
const database = new sequelize({
    dialect: "sqlite",
    storage: "./db/onetomany.db"
})

module.exports = database
