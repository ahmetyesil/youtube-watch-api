import {Request, Response} from 'express';
import BookSchema from '../schema/bookSchema';


// - GET - /books # return all books
export let allBook = (req: Request, res: Response) => {
    let books = BookSchema.find((err: any, books: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(books);
        }
    })
}


// - GET - /book/{1} # a new book into the table
export let getBook = (req: Request, res: Response) => {
    BookSchema.findById(req.params.id, (err: any, book: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(book);
        }
    })
}


// - PUT - /book # inserts a new book into the table.
export let addBook = (req: Request, res: Response) => {
    let book = new BookSchema(req.body);
    book.save((err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(book);
        }
    })
}


// - DELETE - /book/{1} # deletes a book with id of 1.
export let deleteBook = (req: Request, res: Response) => {
    BookSchema.deleteOne({_id: req.params.id}, (err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send('Successfully deleted the book');
        }
    })
}


// - PORT - /book/{1} # updates a book with id of 1.
export let updateBook = (req: Request, res: Response) => {
    BookSchema.findByIdAndUpdate(req.params.id, req.body, (err: any, book: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send('Successfully deleted the book');
        }
    })
}