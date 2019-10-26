
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const {signUpUser, loginUser} = require("../services/userServices")

module.exports = function userController() {
    this.signUp = (req, res) => {
        // console.log(req.body)
        bcrypt.hash(req.body.password, 10, (err, hash) => {

            signUpUser(req.body, hash).then(result => {
                res.send({
                    success: true,
                    message: 'user created',
                    data: result
                })
            }).catch(error => {
                res.send({ 
                    success: false, 
                    message: "could not user", 
                    data: error })
            })
        })
    }


    this.login = (req, res) => {
        console.log('got here')
        loginUser(req.body).then(user => {
            console.log(user)
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    res.send(401).json({
                        message: "login failed",
                        error: err
                    })
                }
                if (result) {
                    const token = jwt.sign({
                        email: user[0].email,
                        userId: user[0]._id,
                    },
                    "secret",
                    {
                        expiresIn: "1h"
                    }
                    );

                    res.status(200).json({
                        message: "login successful",
                        token: token,
                        user: user[0]
                    });
                }else {
                    res.send(401).send({
                        message: "login failed"
                    })
                }
            })
        })
    }
}