import express from 'express';
import Category from '../models/category.js';
const categoryRouter = express.Router();


categoryRouter.route('/')
.get((req, res, next) => {
    Category.find()
    .then(categories => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(categories);
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
    Category.findOne({name: req.body.name, user: req.user._id})
    .then(category => { 
        if (!category) {
            Category.create({
                user: req.body.user,
                name: req.body.name
            })
            .then(category => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.send(category);
            })
        } else {
            res.statusCode = 409;
            res.setHeader('Content-Type', 'application/json');
            res.send('Category Already Exists.')
        }
    })
    .catch(err => next(err));
})

categoryRouter.route('/:categoryId')
.get((req, res, next) => {
    Category.findById(req.params.categoryId)
    .then(category => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(category);
    })
    .catch(err => next(err));
})
.put((req, res, next) => {
    Category.findById(req.params.categoryId)
    .then(category => {
        category.name = req.body.name;
        category.save();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(category);
    })
    .catch(err => next(err));
})
.delete((req, res, next) => {
    Category.findByIdAndDelete(req.params.categoryId)
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    })
    .catch(err => next(err));
});


categoryRouter.route('/private/:userId')
.get((req,res,next) => {
    Category.find()
    .then(categories => {
        const mycategories = categories.filter(category => category.user == req.params.userId)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(mycategories);
    })
    .catch(err => next(err));
})
.post((req,res,next) => {
    Category.find()
    .then(categories => {
        const mycategories = categories.filter(category => category.user == req.params.userId);
        if (mycategories.filter(category => category.name === req.body.name).length !== 0) {
            Category.create({
                user: req.params.userId,
                name: req.body.name
            })
            .then(category => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.send(category);
            })
            .catch(err => next(err));
        } else {
            res.statusCode = 409;
            res.setHeader('Content-Type', 'application/json');
            res.end('This category already exists!');
        }
    })
    .catch(err => next(err));
});


export default categoryRouter;