const userModel = require("../models/users");

const signUpUser = function(userData, hash) {
  const newUser = new userModel({
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
};

const loginUser = function(userData) {
  return userModel.find({ email: userData.email });
};

const editUser = async function(userData, userParams) {
  const userData = await userModel.findByIdAndUpdate(
    { _id: userParams },
    {
      $set: {
        firstName: userData.firstName,
        lastName: userData.lastname,
        email: userData.email,
        phone: userData.phone,
        password: hash,
        businessName: userData.businessname,
        businessPhone: userData.businessphone,
        businessType: userData.businesstype,
        businessCategory: userData.businesscategory,
        "cardDetails.CardNumber": userData.cardDetails.CardNumber,
        "cardDetails.cardHolderName": userData.cardDetails.cardHolderName,
        "cardDetails.expiryDate": userData.cardDetails.expiryDate
      }
    }, {new: true}
  )
  return userData;
};

module.exports = {
  signUpUser: signUpUser,
  loginUser: loginUser,
  editUser: editUser
};
