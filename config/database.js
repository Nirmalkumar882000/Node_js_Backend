const Sequalize =require("sequelize");



const sequalize =new Sequalize("lucky","lucky","123456789",{
    host:"localhost",
    dialect:"mysql"
})



module.exports =sequalize;