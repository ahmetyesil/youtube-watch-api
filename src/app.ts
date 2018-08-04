import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as bookController from './controller/bookController';
import * as loginController from './controller/loginController';
import * as mongoose from 'mongoose'

const app = express();

const uri: string = 'mongodb://yesil:ay467055@ds111192.mlab.com:11192/youtube-watching';

mongoose.connect(uri, {useNewUrlParser: true}, (err: any) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log('Bağlantı başarılı.')
    }
});

app.set('port',8000);

app.use(bodyParser.json());

app.get('/book',loginController.verifyToken , bookController.allBook);
app.get('/book/:id',loginController.verifyToken , bookController.getBook);
app.put('/book',loginController.verifyToken , bookController.addBook);
app.delete('/book/:id',loginController.verifyToken , bookController.deleteBook);
app.post('/book/:id',loginController.verifyToken , bookController.updateBook);

app.post('/login', loginController.login);


const server = app.listen(app.get('port'), () => {
    console.log('App is running on http://localhost:%d', app.get('port'))
});