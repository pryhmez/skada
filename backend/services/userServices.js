var userModel = require('../models/users')



var addUser = function(userData) {
    var newUser = new userModel(
        {
            firstName: userData.firstname,
            lastName: userData.lastname,
            email: userData.email,
            phone: userData.phone

        });
        return newUser.save();
}


module.exports.addUser = addUser;