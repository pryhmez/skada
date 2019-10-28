const { signUpUser, loginUser } = require('../services/userServices');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const AppError = require('../utils/appError');

module.exports = function userController() {
	this.signUp = (req, res, next) => {
		bcrypt.hash(req.body.password, 10, (err, hash) => {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return next(new AppError({errors: errors.array()}, 400));
			}
			signUpUser(req.body, hash)
				.then((result) => {
					if (result) {
						res.send({
							success: true,
							message: 'user created',
							data: result
						});
					} else {
						return next(new AppError('User already exists', 400));
					}
				})
				.catch((error) => {
					return next(new AppError(error, 400));
				});
		});
	};

	this.login = (req, res,next) => {
		loginUser(req.body).then((user) => {
			bcrypt.compare(req.body.password, user[0].password, (err, result) => {
				const errors = validationResult(req);
				if (errors) {
					return next(new AppError({errors}, 401));					
				}
				if (result) {
					const token = jwt.sign(
						{
							email: user[0].email,
							userId: user[0]._id
						},
						'secret',
						{
							expiresIn: '1h'
						}
					);

					res.status(200).json({
						message: 'login successful',
						token: token,
						user: user[0]
					});
				} else {
					return next(new AppError('login failed, please enter correct Username and password', 401));
				}
			});
		}).catch((error) => {
			return next(new AppError(error, 400));
		});
	};
};
