import express from 'express';
import Transaction from '../models/transaction.js';
import { isAuth } from '../utils.js';

const transactionRouter = express.Router();

transactionRouter.route('/')
.get((req, res, next) => {
    Transaction.find()
    .populate('category','name')
    .then(transactions => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(transactions)
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
    Transaction.create({
        user: req.body.user,
        type: req.body.type,
        category: req.body.category,
        amount: req.body.amount,
        description: req.body.description? req.body.description: "",
        date: req.body.date
    })
    .then(transaction => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(transaction);
    })
    .catch(err => next(err));
});

transactionRouter.route('/private/:userId')
.get((req,res,next) => {
    Transaction.find()
    .populate('category', 'name')
    .then(transactions => {
        const mytransactions = transactions.filter(trans => trans.user == req.params.userId);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(mytransactions);
    })
    .catch(err => next(err));
})

transactionRouter.route('/:transactionId')
.get((req,res,next) => {
    Transaction.findById(req.params.transactionId)
    .then(transaction => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(transaction);
    })
    .catch(err => next(err));
})
.put((req,res,next) => {
    Transaction.findById(req.params.transactionId)
    .then(transaction => {
        transaction.type = req.body.type ? req.body.type : transaction.type;
        transaction.category = req.body.category ? req.body.category : transaction.category;
        transaction.amount = req.body.amount ? req.body.amount : transaction.amount;
        transaction.description = req.body.description ? req.body.description : transaction.description;
        transaction.date = req.body.date ? req.body.date : transaction.date;
        transaction.save()
        .then(transaction => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.send(transaction);
        })
        .catch(err => next(err));
    })
    .catch(err => next(err));
})
.delete((req,res,next) => {
    Transaction.findByIdAndDelete(req.params.transactionId)
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    })
    .catch(err => next(err));
})


export default transactionRouter;