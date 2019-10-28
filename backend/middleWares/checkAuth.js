const jwt = require("jsonwebtoken");

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
            res.status(401).send({
                message: "access denied session ended please signin again"
            })
        }
    } catch (err) {
        if (err) {
            return res.status(402).send({
                message: "Auth Failed" + err + token

            });
        }
    }

} 
