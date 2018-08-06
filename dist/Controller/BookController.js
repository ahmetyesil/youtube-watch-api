"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bookSchema_1 = require("../schema/bookSchema");
// - GET - /books # return all books
exports.allBook = function (req, res) {
    var books = bookSchema_1.default.find(function (err, books) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(books);
        }
    });
};
// - GET - /book/{1} # a new book into the table
exports.getBook = function (req, res) {
    bookSchema_1.default.findById(req.params.id, function (err, book) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(book);
        }
    });
};
// - PUT - /book # inserts a new book into the table.
exports.addBook = function (req, res) {
    var book = new bookSchema_1.default(req.body);
    book.save(function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(book);
        }
    });
};
// - DELETE - /book/{1} # deletes a book with id of 1.
exports.deleteBook = function (req, res) {
    bookSchema_1.default.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send('Successfully deleted the book');
        }
    });
};
// - PORT - /book/{1} # updates a book with id of 1.
exports.updateBook = function (req, res) {
    bookSchema_1.default.findByIdAndUpdate(req.params.id, req.body, function (err, book) {
        if (err) {
            res.send(err);
        }
        else {
            res.send('Successfully deleted the book');
        }
    });
};
//# sourceMappingURL=bookController.js.map