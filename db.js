const mysql = require('./config')

const checkPhone = (phone,callback)=>{
    mysql.query(`select * from user where phone=?`,[phone],callback)
}
module.exports ={
    checkPhone: checkPhone,
}