const userModel = require('../models/users')

const findUserWithId = function( _id ) {
    return userModel.findOne({ _id }).select('-password')
}


module.exports = {
    findUserWithId,
    saveChangesToUser,
    findUserWithEmail
}
