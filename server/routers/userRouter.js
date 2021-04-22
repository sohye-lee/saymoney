import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user.js'
import { generateToken, isAuth } from '../utils.js';

const userRouter = express.Router();

userRouter.route('/')
.get((req, res, next) => {
    User.find()
    .then(users => {
        if (users) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(users);
        } else {
            res.statusCode = 200;
            res.end('No User Found');
        }
    })
});

userRouter.route('/signup')
.post((req,res,next) => {
    User.findOne({ email: req.body.email })
    .then(user => {
        if (user) {
            res.statusCode = 400;
            res.end('Email already exists. Please login or try with another email.')
        } else {
            User.create({
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 8)
            })
            .then(user => {
                console.log('New User Created : ', `${user.name}, ${user.email}`);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);
            })
            .catch(err => next(err));
        }
    })
    .catch(err => next(err));
});

userRouter.route('/login')
.post((req,res,next) => {
    User.findOne({ email: req.body.email })
    .then(user => {
        console.log(user);
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                res.statusCode = 200;
                res.send({
                    _id: user._id,
                    email: user.email,
                    name: user.name,
                    token: generateToken(user),
                })
            } else {
                res.statusCode = 401;
                throw new Error("Password invalid. Please try again.");
            }
        } else {
            res.statusCode = 404;
            res.end('User Not Found. Please verify or signup.');
        }
    })
    .catch(err => next(err));
});

userRouter.route('/:userId')
.get(isAuth, (req,res,next) => {
    User.findById(req.params.userId)
    .then(user => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
    })
    .catch(err => next(err));
})
.put(isAuth, (req, res, next) => {
    User.findById(req.params.userId)
    .then(user => {
        if (user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            if (req.body.password) {
                user.password = bcrypt.hashSync(req.body.password, 8);
            } 
        } else {
            res.status = 404;
            res.setHeader('Content-Type', 'application/json');
            res.send("User Not Found. Please Signup.");
        };
        user.save()
        .then(user => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user)
            });
        })
        .catch(err => next(err));
    })
    .catch(err => next(err));
})
.delete(isAuth, (req,res,next) => {
    User.findByIdAndDelete(req.params.userId)
    .then(response => {
        console.log(`User ${user.name} deleted`);
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
})


export default userRouter;