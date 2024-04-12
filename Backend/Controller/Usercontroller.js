const mongoose = require("mongoose")
const User = require('../Model/User')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
const token = require("../Model/token.js")


dotenv.config();

const signupUser = async (req, res) => {
    try {
        const hashpassword = await bcrypt.hash(req.body.password, 10);
        const newbody = { name: req.body.name, username: req.body.username, password: hashpassword }
        const newdata = new User(newbody);
        await newdata.save();

        return res.status(200).json({ msg: "signup successfull" })
    }
    catch {
        return res.status(500).json({ msg: "Error while signup the user" })
    }
}

const loginUser = async (req, res) => {
    const user = await User.findOne({ username: req.body.username })

    if (!user) {
        return res.status(400).json({ msg: "Username do not match" })
    }

    try {
        const match = bcrypt.compare(req.body.password,user.password);
        
        if(match){
            
            const accessToken = jwt.sign(user.toJSON(),process.env.ACCESS_SECRET_KEY , {expiresIn:'15m'})
            const refreshToken = jwt.sign(user.toJSON(),process.env.REFRESH_SECRET_KEY)
            
            const newtoken = new token({token:refreshToken})
            await newtoken.save();
            console.log("just bhad")

            return res.status(200).json({accessToken:accessToken,refreshToken:refreshToken,name:user.name,username:user.username})

        }else{
             return res.status(400).json({msg:"Sorry password cannot match"});
        }
    }
    catch (err) {
        return res.status(500).json({msg:"Error while login in user"})
    }
}



module.exports = { signupUser, loginUser };