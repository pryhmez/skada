const userModel = require('../models/users')

const signUpUser = async function(userData, hash) {
    let user  =  await userModel.findOne({ email: userData.email })
    if (user) return null;
    const newUser = await new userModel(
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
        console.log('igothere  still')
        return newUser.save();
}

const loginUser = function (userData) {
    return userModel.find({email: userData.email})
}


module.exports = {
    signUpUser: signUpUser,
    loginUser: loginUser
}