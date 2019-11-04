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
		console.log(req.body, "from the server")
		bcrypt.hash(req.body.password, 10, (err, hash) => {
		
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				console.log("hiiiiiiiiiiiiiiiiiii")
				console.log(errors)
				return next(new AppError(errors, 400));
			}
			console.log("hellooooooooooooo")
			signUpUser(req.body, hash)
				.then((user) => {
					if (user) {
						console.log("%%%%%%%%%%%%%%%%%%%%%%%")
						this.sendEmailWithToken(user,req, res, next);
					} else {
						return next(new AppError('User already exists with this email address, please Login', 400));
					
					}
				})
				.catch((error) => {
					console.log("***********************")
					return next(new AppError(error, 400));
				});
		});
	};

	this.login = (req, res, next) => {
		loginUser(req.body)
			.then((user) => {
				bcrypt.compare(req.body.password, user.password, (err, result) => {
					const errors = validationResult(req);
					if (!errors.isEmpty()) {
						return next(new AppError(errors, 401));
					}
					if (err) {
						return next(new AppError(err, 401));
					}
					if (!user.isVerified)
						return next(new AppError('login failed, Your Account has not been verified', 401));
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

						res.status(200).json({
							message: 'login successful',
							token: token,
							user: user
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
	this.confirmSignUp = (req, res, next) => {
		const token = req.params.token;
		console.log(token);
		confirmSignUp(token).then((userToken) => {
			console.log('+++++++++++++++++++++++');
			console.log(userToken);
			console.log('++++++++++++++++++');
			if (!userToken)
				res.status(400).json({
					success: 'fail',
					message: 'We were unable to find a valid token. Your token my have expired.'
				});
			findUserWithId(userToken._userId)
				.then((user) => {
					console.log(user);
					if (!user) return next(new AppError('We were unable to find a user for this token.', 400));
					if (user.isVerified) return res.redirect('https://skada.netlify.com/login');

					// Verify and save the user
					user.isVerified = true;
					saveChangesToUser(user)
						.then((verifiedUser) => {
							// res.status(200).send('The account has been verified. Please log in.');
							res.redirect('https://skada.netlify.com/login');
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
				console.log(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
				const transporter = nodemailer.createTransport({
					service: 'Sendgrid',
					auth: { user: process.env.SENDGRID_USERNAME, pass: process.env.SENDGRID_PASSWORD }
				});
				console.log(user.email);
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
