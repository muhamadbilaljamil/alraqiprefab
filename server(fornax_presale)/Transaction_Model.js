const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
    {
        transaction: {
            type: Object,
        },
        hash: {
            type: String,
        },
        typeofpayment: {
            type: String,
        },
        amount: {
            type: Number,
        },
        confirmations: {
            type: Number,
        },
        wallet_address: {
            type: String,
            lowercase: true,
        },
        user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    }, //opts
    {
        timestamps: true,
    }
);

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
