const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    
    let token = req.header('X-auth-token')

    try {

        var decoder = jwt.decode(token, { complete: true })
        if (decoder.payload.userRole == "admin") {
            const decoded = jwt.verify(req.body.token, "secret", null);
            console.log(decoded);
            req.userData = decoded;
            next();
        } else {
            res.status(401).send({
                message: "access denied must have admin priviledges"
            })
        }
    } catch (err) {
        return res.status(402).send({
            message: "Auth Failed"
        });
    }

} 
