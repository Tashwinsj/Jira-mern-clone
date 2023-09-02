const bcrypt = require('bcrypt') 
const User = require('../models/User')
const sectoken  ='eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5MTE2MDAwNiwiaWF0IjoxNjkxMTYwMDA2fQ.yybHq17fbdxMEY3X1eVKEH809nT6Bw2UlL-KtDQZVlA'
const jwt = require('jsonwebtoken')

const register = async  (req , res )=>{
    try{
        const {
            name , 
            email , 
            password 
             
        } = req.body ; 
        
        const saltRounds = 12 ; 
        const passwordHash = await bcrypt.hash(password, saltRounds);
        

        const newUser = new User({
            name , 
            email , 
            password : passwordHash
          });
          const savedUser = await newUser.save();
          res.status(201).json({savedUser});
    } 
    catch(err){
        res.status(500).json({ error: err.message });
    }
} 

const login = async (req ,res)=>{
    try{ 
        const {name , password } = req.body ; 
        const user = await User.findOne({name : name})  ; 
        if (!user) return res.status(400).json({msg : "User doesnt exist"}) 

        const ismatch = await bcrypt.compare(password , user.password ) ; 
        if(!ismatch) return res.status(400).json({msg: "Invalid Credentials"}) ;  

        const token = jwt.sign({ id: user._id }, sectoken);
        delete user.password
        res.status(200).json({ token , user });
    }
    catch(err){
        res.status(500).json({ error: err.message });
    }
}




module.exports.login = login ;
module.exports.register = register ; 