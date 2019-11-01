const userModel = require('../models/users')

const findUserWithId = function( _id ) {
    return userModel.findOne({ _id })
}
const findUserWithEmail = function( email ) {
    return userModel.findOne({ email })
}
const saveChangesToUser = function(user){
    return user.save();
}


module.exports = {
    findUserWithId,
    saveChangesToUser,
    findUserWithEmail
}