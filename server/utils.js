import jwt from 'jsonwebtoken';
import { config } from './config.js';

export const generateToken = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            name: user.name,
            email: user.email,
        },
        config.secretKey || 'secretkey',
        {
            expiresIn: '30d',
        }
    );
};

export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
        const token = authorization.slice(7, authorization.length);
        jwt.verify(token, config.secretKey || 'secretkey', (err, decode) => {
            if (err) {
                res.status(401).send({ message: 'Invalid Token, Try Again.' });
            } else {
                req.user = decode;
                next();
            }
        })
    } else {
        res.status(401).send({ message: 'No Token' });
    }
};