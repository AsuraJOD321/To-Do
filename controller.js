const{checkPhone} = require('./db')
const bcrypt = require("bcrypt")


const homepage = (req,res)=>{
    res.status(200).json({message:"Home page"})
}
const userRegister = (req,res)=>{
    var data = req.body;
    console.log(data);
    res.status(200).json({message:"user regstered"})
}
const userLogin = (req,res)=>{
    res.status(200).json({message:"user logined"})
}
const {checkPhone}=(req,res)=>{
    if (err){
        res.status(500).json({message:"Server Error!"})
    }else{
        if(XPathResult.length==0){
            const hashedPassword = bcrypt.hashSync(data,password,8);
            data,password=hashedPassword;

        }else{
            res.status(200).json({message:"phone number already taken"})
        }
    }
}








module.exports = {
    homepage:homepage,
    userRegister:userRegister,
    userLogin:userLogin
}