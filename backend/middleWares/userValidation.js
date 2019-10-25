const { check } = require('express-validator');
const userValidation = (type) => {
  let validationRes = [];
    switch (type) {
        case "create user":
            
          valiationRes =  [
                    check('email', 'Please include a valid email').isEmail(),
                    check(
                      'password',
                      'Please enter a password with 8 or more characters'
                    ).isLength({ min: 8 }),
                    check('phone', 'Please enter a valid phone number').if(value => (/^0[7-9][0-1]\d{8}$/g).test(value)),
                    check('businessphone', 'Please enter a valid phone number').if(value => (/^0[7-9][0-1]\d{8}$/g).test(value))
                  ]
            break;
    
        default:
            break;
    }
    console.log(validationRes)
    return validationRes;
}

module.exports = userValidation;



