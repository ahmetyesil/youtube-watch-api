import * as mongoose from 'mongoose'


export const BookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true}
});

const bookModel = mongoose.model('Book', BookSchema);
export default bookModel;