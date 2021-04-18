import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User'
    },
    type: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Category'
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
},
{
    timestamps: true
});

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;