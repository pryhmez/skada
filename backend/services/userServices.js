var userModel = require('../models/users')



var addUser = function(userData, hash) {
    var newUser = new userModel(
        {
            firstName: userData.firstname,
            lastName: userData.lastname,
            email: userData.email,
            phone: userData.phone,
            password: hash,
            businessName: userData.businessname,
            businessPhone: userData.businessphone,
            businessType: userData.businesstype,
            businessCategory: userData.businesscategory

        });
        return newUser.save();
}

var loginUser = function (userData) {
    return userModel.find({email: userData.email})
}


module.exports.addUser = addUser;