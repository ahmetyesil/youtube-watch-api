"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
exports.BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true }
});
var bookModel = mongoose.model('Book', exports.BookSchema);
exports.default = bookModel;
//# sourceMappingURL=bookModel.js.map