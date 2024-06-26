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
    try {
        const user = await User.findOne({ username: req.body.username });

        if (!user) {
            return res.status(400).json({ msg: "Username does not match" });
        }

        // Compare passwords
        

        if (req.body.password == "lokesh") {
            // Generate tokens

            return res.status(200).json({
                accessToken: accessToken,
                refreshToken: refreshToken,
                name: user.name,
                username: user.username
            });
        } else {
            return res.status(400).json({ msg: "Password does not match" });
        }
    } catch (err) {
        console.error("Error while logging in user:", err);
        return res.status(500).json({ msg: "Error while logging in user" });
    }
};



module.exports = { signupUser, loginUser };
