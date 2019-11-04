const { signUpUser, loginUser } = require('../services/userServices');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const AppError = require('../utils/appError');
const checkAuth = require('../middleWares/checkAuth');

module.exports = function userController() {

};

  this.editUser = (req, res) => {
    editUser(req.body, req.params.id)
      .then(result => {
        res.send({
          success: true,
          message: "user profile updated",
          data: result
        });
        console.log(result);
      })
      .catch(error => {
        res.send({
          success: false,
          message: "could not user",
          data: error
        });
      });
  };

						

					
