import {Request, Response} from 'express';
import * as jwt from 'jsonwebtoken';


// - PORT - /login # updates a book with id of 1.
export let login = (req: Request, res: Response) => {
    const user: any = {
        username: 'Ahmet',
        email: 'ahmet.koyuyesil@gmail.com'
    }

    jwt.sign({user}, 'secretkey', (err: any, token: string) => {
        if (err) {
            res.send(err);
        } else {
            res.json({token});
        }
    });
}

export let verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

