"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var bookController = require("./controller/bookController");
var loginController = require("./controller/loginController");
var mongoose = require("mongoose");
var app = express();
var uri = 'mongodb://yesil:ay467055@ds111192.mlab.com:11192/youtube-watching';
mongoose.connect(uri, { useNewUrlParser: true }, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log('Bağlantı başarılı.');
    }
});
app.set('port', 8000);
app.use(bodyParser.json());
app.get('/book', loginController.verifyToken, bookController.allBook);
app.get('/book/:id', loginController.verifyToken, bookController.getBook);
app.put('/book', loginController.verifyToken, bookController.addBook);
app.delete('/book/:id', loginController.verifyToken, bookController.deleteBook);
app.post('/book/:id', loginController.verifyToken, bookController.updateBook);
app.post('/login', loginController.login);
var server = app.listen(app.get('port'), function () {
    console.log('App is running on http://localhost:%d', app.get('port'));
});
//# sourceMappingURL=app.js.map