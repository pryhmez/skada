var {addUserService} = require('../services/userServices')

module.exports = class userController {
    
    async addUser (req, res) {
        console.log('aiie')
        console.log(req.body)
        await addUserService(req.body).then(result => {
            res.send({success : true, message : 'user created', data : null})
        }).catch(error => {
            res.send({success: false, message : "could not user", data: error})
        })
    }

}