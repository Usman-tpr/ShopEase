const router = require('express').Router();
const User = require('../Models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const authMiddleware = require('../Middlewares/authMiddleware')
router.post('/register',async(req, res) => {
               const { email , name , password } = req.body
               console.log(req.body)
        try {
              //checking user
          const user = await User.findOne({email});
          if(user) {
             throw Error("You are already registerd Please Sign In");               
        } 

            //empty fields
            if(!req.body.name ||!req.body.email ||!req.body.password ) {
                throw Error("Please fill all fields");
            }     
              
            //hashing password

                        const salt = await bcrypt.genSalt(10);
                        const hashedPassword = await bcrypt.hash(req.body.password, salt);
                    
            //save user
          
            const newUser = await new User({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
              });
              await newUser.save();
            res.send({
                success: true,
                message: "registration completed successfully"
            })
        } catch (error) {
            res.send({
                success: false,
                message: error.message
            })
        }
         
})


router.post('/login',async(req, res) => {

    //checking user
    try {
        const user = await User.findOne({email:req.body.email});
        if(!user) {
            throw Error("User does not exist please Signup");
        }
        //checking password
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if(!isMatch) {
            throw Error("Password is incorrect");
        }
         //assign token
         const token  = jwt.sign({userId:user._id},'hi this is me',{expiresIn:"1d"});
        //return user
        res.send({
            success: true,
            message: "login completed successfully",
            data:token
        })
    }
    catch(error){
        res.send({
            success: false,
            message: error.message
        })
    }
})


router.get('/get-current-user',authMiddleware , async(req,res) => {
    try {
        
        const user = await User.findById(req.body.userId);
        
        if(user){
            console.log('enter to route')
            res.send({
                success: true,
                message: "user fetched successfully",
                data:user
            })
        }
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
})
module.exports = router;