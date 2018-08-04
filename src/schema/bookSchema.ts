import * as mongoose from 'mongoose'
import {BookModel} from '../model/book/bookModel';

export const BookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true}
});

const bookModel: BookModel = mongoose.model('Book', BookSchema);
export default bookModel;