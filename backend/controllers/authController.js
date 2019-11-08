const { signUpUser, loginUser, verifyUserAccountToken, confirmSignUp } = require('../services/authServices');
const { findUserWithId, findUserWithEmail, saveChangesToUser } = require('../services/userServices');

const url = require('url');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const AppError = require('../utils/appError');
const nodemailer = require('nodemailer');
// const sendgridTransport = require('nodemailer-sendgrid-transport')

module.exports = function authController() {
	this.signUp = (req, res, next) => {
		bcrypt.hash(req.body.password, 10, (err, hash) => {
		
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return next(new AppError(errors, 400));
			}
			signUpUser(req.body, hash)
				.then((user) => {
					if (user) {
						this.sendEmailWithToken(user,req, res, next);
					} else {
						return next(new AppError('User already exists with this email address, please Login', 400));
					
					}
				})
				.catch((error) => {
					return next(new AppError(error, 400));
				});
		});
	};

	this.login = (req, res, next) => {
		loginUser(req.body)
			.then((user) => {
				if(!user) {
					return next(new AppError('Email does not exist in our Database, please sign up', 401));
				}
				bcrypt.compare(req.body.password, user.password, (err, result) => {
					const errors = validationResult(req);
					if (!errors.isEmpty()) {
						return next(new AppError(errors, 401));
					}
					if (err) {
						return next(new AppError(err, 401));
					}
					if (!user.isVerified)
					// const { email, businessName } = user;
						 return res.status(200).json({
							status: "pending",
							message: 'Your account has not been verified, please verify your account or click on resend mail',
							user: user
							// user: user
						});
					if (result) {
						const token = jwt.sign(
							{
								email: user.email,
								userId: user._id
							},
							'secret',
							{
								expiresIn: '1h'
							}
						);
						// let userData = Object.assign({}, user);
						res.status(200).json({
							status: true,
							message: 'login successful',
							token: token,
							// user: user
						});
					} else {
						return next(new AppError('login failed, please enter correct Username and password', 401));
					}
				});
			})
			.catch((error) => {
				return next(new AppError(error, 500));
			});
	};
	this.getLoggedInUser = (req, res, next) => {
		findUserWithId(req.user)
			.then((user) => {
				if (!user) { return next(new AppError('We were unable to find a user for this token.', 400));
			} else {
				res.status(200).json({
					status: true,
					message: 'login successful',
					user: user
				});
			}})
			.catch((error) => {
				return next(new AppError(error, 500));
			});		
	}
	this.confirmSignUp = (req, res, next) => {
		const token = req.params.token;
		confirmSignUp(token).then((userToken) => {
			if (!userToken)
				res.status(400).json({
					success: 'fail',
					message: 'We were unable to find a valid token. Your token my have expired.'
				});
			findUserWithId(userToken._userId)
				.then((user) => {
					if (!user) return next(new AppError('We were unable to find a user for this token.', 400));
					if (user.isVerified) return res.redirect('http://localhost:3000/login');

					// Verify and save the user
					user.isVerified = true;
					saveChangesToUser(user)
						.then((verifiedUser) => {
							// res.status(200).send('The account has been verified. Please log in.');
							res.redirect('http://localhost:3000/login');
						})
						.catch((error) => {
							return next(new AppError(error, 500));
						});
				})
				.catch((error) => {
					return next(new AppError(error, 500));
				});
		});
	};
	this.resendConfirmToken = (req, res, next) => {
		findUserWithEmail(req.body.email).then((user) => {
			if (!user) return next(new AppError('We were unable to find a user for this email.', 400));
			if (user.isVerified) return next(new AppError('This account has already been verified. Please log in.', 400));
			this.sendEmailWithToken(user, req, res, next);
		});
	};

	this.sendEmailWithToken = (user, req, res, next) => {
		const token = jwt.sign(
			{
				email: user.email,
				userId: user._id
			},
			'secret',
			{
				expiresIn: '12h'
			}
		);
		const { _id } = user;
		verifyUserAccountToken(_id, token)
			.then((userToken) => {
				const transporter = nodemailer.createTransport({
					service: 'Sendgrid',
					auth: { user: process.env.SENDGRID_USERNAME, pass: process.env.SENDGRID_PASSWORD }
				});
				const mailOptions = {
					from: 'no-reply@skada.com',
					to: user.email,
					subject: 'Verify Skada Account',
					text:
						`Hello ${user.firstName},\n\n` +
						'Please verify your account by clicking the link: \nhttp://' +
						req.headers.host +
						'/api/user/confirmation/' +
						userToken.token +
						'.\n'
				};
				transporter.sendMail(mailOptions, (err) => {
					if (err) {
						return next(new AppError(err.message, 500));
					}
					res.status(200).json({
						status: true,
						message: 'A verification email has been sent to ' + user.email + '.'
					});
				});
			})
			.catch((error) => {
				return next(new AppError(error, 400));
			});
	};
};
