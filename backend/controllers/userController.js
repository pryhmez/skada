const { signUpUser, loginUser } = require('../services/userServices');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const AppError = require('../utils/appError');

module.exports = function userController() {

};
