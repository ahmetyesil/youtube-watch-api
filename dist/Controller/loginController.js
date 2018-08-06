"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
// - PORT - /login # updates a book with id of 1.
exports.login = function (req, res) {
    var user = {
        username: 'Ahmet',
        email: 'ahmet.koyuyesil@gmail.com'
    };
    jwt.sign({ user: user }, 'secretkey', function (err, token) {
        if (err) {
            res.send(err);
        }
        else {
            res.json({ token: token });
        }
    });
};
exports.verifyToken = function (req, res, next) {
    var bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        var bearer = bearerHeader.split(' ');
        var bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }
    else {
        res.sendStatus(401);
    }
};
//# sourceMappingURL=loginController.js.map