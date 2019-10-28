const { check } = require('express-validator');

const userSignUpValidation = [
  check('firstname', 'Please inut your first name').not().isEmpty(),
	check('lastname', 'Please inut your last  name').not().isEmpty(),  
	check('email', 'Please include a valid email').isEmail(),
	check('password', 'Please enter a password with 8 or more characters').isLength({ min: 8 }),
  check('phone', 'Please enter a valid phone number').custom((value) => (/^0[7-9][0-1]\d{8}$/g).test(value)),
	check('businessname', 'Please input your name').not().isEmpty(),  
  check('businessphone', 'Please enter a valid phone number').custom((value) => (/^0[7-9][0-1]\d{8}$/g).test(value)),
	check('businesscategory', 'Please Select a  business category').not().isEmpty(),    
];

module.exports = { userSignUpValidation };
