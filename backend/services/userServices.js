const userModel = require("../models/users");
const bcrypt = require("bcrypt");

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
  if (userData.password) {
    var hash = await bcrypt.hash(userData.password, 10);
  }
  const user = await userModel.findOne({ _id: userParams });
  user.firstName = userData.firstName;
  user.lastname = userData.lastName;
  user.email = userData.email;
  user.phone = userData.phone;
  user.password = hash;
  user.businessname = userData.businessName;
  user.businessphone = userData.businessPhone;
  user.businesstype = userData.businessType;
  user.businesscategory = userData.businessCategory;
  user.cardDetails.CardNumber = userData.CardNumber;
  user.cardDetails.cardHolderName = userData.cardHolderName;
  user.cardDetails.expiryDate = userData.expiryDate;

  return user.save();
};

module.exports = {
  signUpUser: signUpUser,
  loginUser: loginUser,
  editUser: editUser,
  findUserWithId: findUserWithId,
  saveChangesToUser: saveChangesToUser,
  findUserWithEmail: findUserWithEmail
};
