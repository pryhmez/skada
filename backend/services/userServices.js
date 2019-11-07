const userModel = require("../models/users");

const signUpUser = async function(userData, hash) {
  let user = await userModel.findOne({ email: userData.email });
  if (user) return null;
  const newUser = await new userModel({
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
  console.log("igothere  still");
  return newUser.save();
};

const loginUser = function(userData) {
  return userModel.find({ email: userData.email });
};
const userModel = require("../models/users");

const findUserWithId = function(_id) {
  return userModel.findOne({ _id });
};
const findUserWithEmail = function(email) {
  return userModel.findOne({ email });
};
const saveChangesToUser = function(user) {
  return user.save();
};

const editUser = async function(userData, userParams) {
  const user = await userModel.findByIdAndUpdate(
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
    },
    { new: true }
  );
  return user;
};

module.exports = {
  signUpUser: signUpUser,
  loginUser: loginUser,
  editUser: editUser,
  findUserWithId: findUserWithId,
  saveChangesToUser: saveChangesToUser,
  findUserWithEmail: findUserWithEmail
};
