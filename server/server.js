import express from 'express';
import mongoose from 'mongoose';
import logger from 'morgan';
import createError from 'http-errors';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import indexRouter from './routers/indexRouter.js';
import userRouter from './routers/userRouter.js';
import categoryRouter from './routers/categoryRouter.js';
import transactionRouter from './routers/transactionRouter.js';

dotenv.config();
const app = express();
app.use(cors());
console.log(process.env.URL);

// CONNECT TO MONGODB
const connect = mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    // useFindAndModify: false
});

connect.then(() => console.log('Server Now In Service '),
    err => console.log(err)
);

// VIEW ENGINE SETUP 
app.set('view engine', 'jade');

// ROUTERS SETUP
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/index', indexRouter);
app.use('/api/users', userRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/transactions', transactionRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/client/build/index.html')))


// CATCH 404 and FORWARD TO ERROR HANDLER
app.use((req, res, next) => {
    next(createError(404));
});

// ERROR HANDLER
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    
    // render the error page
    res.status(err.status || 500);
    res.render('error');
})

// PORT SETTING
const PORT = process.env.PORT || 5050;
app.set('port', PORT)
app.listen(PORT, () => {
    console.log(`Server is ready at http://localhost:${PORT}`);
});