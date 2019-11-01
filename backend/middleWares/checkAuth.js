const jwt = require("jsonwebtoken");
const AppError = require('../utils/appError');

module.exports = (req, res, next) => {

    let token = req.header('X-auth-token')

    try {
        var verify = jwt.verify(token, "secret");
        // var decoder = jwt.decode(token, { complete: true })
        console.log(verify.exp - Date.now() / 1000)
        if (verify.exp > (Date.now() / 1000)) {
            // const decoded = jwt.verify(req.body.token, "secret", null);

            // req.userData = decoded;
            next();
        } else {
            return next(new AppError('access denied session ended please signin again', 401));
        }
    } catch (err) {
        if (err) {
            return next(new AppError(`Authentication failed ${err} + ${token}`, 402));
        }
    }

} 
