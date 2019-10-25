const userModel = require('../models/users')



const signUpUser = function(userData, hash) {
    const newUser = new userModel(
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

const loginUser = function (userData) {
    return userModel.find({email: userData.email})
}


module.exports = {
    signUpUser: signUpUser,
    loginUser: loginUser
}