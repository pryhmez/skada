var {addUser} = require('../services/userServices')

module.exports = function userController(){
    this.addUser = (req, res) => {
        addUser(req.body).then(result => {
            res.send({success : true, message : 'user created', data : null})
        }).catch(error => {
            res.send({success: false, message : "could not user", data: error})
        })
    }
}