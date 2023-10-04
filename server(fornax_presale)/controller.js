const ethers = require('ethers');
const User = require('./User_Model');
const Transaction = require('./Transaction_Model');
const { getEthPriceNow, getEthPriceHistorical } = require('get-eth-price');

const getNonce = async (req, res) => {
    const { wallet_address } = req.body;
    console.log('wallet address: ', wallet_address);
    if (!wallet_address) {
        return res.json({ message: 'Request should have wallet address' });
    } else {
        const user = new User({
            wallet_address: wallet_address,
        });
        let userData = await User.findOne({ wallet_address: wallet_address });
        try {
            if (userData) {
                return res.json({
                    message: `I am signing my one-time nonce: ${userData.nonce}`,
                });
            } else {
                user
                    .save()
                    .then((data) => {
                        return res.json({
                            message: `I am signing my one-time nonce: ${data.nonce}`,
                        });
                    })
                    .catch((error) => {
                        return res.json({
                            message: 'System found error',
                            error: error,
                        });
                    });
            }
        } catch (error) {
            return res.json(error);
        }
    }
};
// meta-mask wallet connection signature authentication and return token as response
const signatureAuthentication = async (req, res) => {
    const { wallet_address, signature } = req.body;
    let balance = [];
    if (!wallet_address || !signature) {
        return res.json(
            { message: 'Request should have signature and publicAddrss' }
        );
    } else {
        balance = await get_balance(wallet_address);
        let user = await User.findOne({ wallet_address: wallet_address });

        if (!user) {
            return res.json({
                message: `User with wallet_address ${wallet_address} is not found in database`,
            });
        } else {
            try {
                const message = `I am signing my one-time nonce: ${user.nonce}`;
                const signerAddress = ethers.utils.verifyMessage(message, signature);
                if (signerAddress.toLowerCase() === user.wallet_address.toLowerCase()) {
                    user.nonce = Math.floor(Math.random() * 1000000);
                    await user.save();
                    return res.json({
                        user_id: user._id,
                        wallet_address,
                        balance,
                    });
                } else {
                    return res.json({
                        error: 'Invalid signature!',
                    });
                }
            } catch (error) {
                return res.json(error);
            }
        }
    }
};

const send_transaction = async (req, res) => {
    const { wallet_address, user_id, transaction, hash, amount, typeofpayment } = req.body;
    let balance = [];
    try {
        const transactionobj = new Transaction({
            transaction,
            hash,
            amount,
            wallet_address,
            user_id,
            typeofpayment
        })
        await transactionobj.save();
        balance = await get_balance(wallet_address);
        return res.json({
            balance,
        });

    } catch (error) {
        return res.json(error);
    }

};

const get_balance = async (wallet_address) => {
    let total_balance = 0;
    const balance = await Transaction.find({ wallet_address }).select({ amount: 1, hash: 1 });
    balance.map((item) => total_balance += item.amount);
    return { balance, total_balance }
}

const get_balance_all = async (req, res) => {
    let total_balance = 0;
    let total_balanceusdt = 0;
    console.log("in function")
    const balanceusdt = await Transaction.find({ typeofpayment: 'usdt' }).select({ amount: 1, hash: 1, typeofpayment: 1 });
    const balanceeth = await Transaction.find({ typeofpayment: 'eth' }).select({ amount: 1, hash: 1, typeofpayment: 1 });
    console.log("in balance", balanceusdt, balanceeth)
    balanceusdt.map((item) => total_balanceusdt += item.amount);
    balanceeth.map((item) => total_balance += item.amount);

    await getEthPriceNow()
        .then(data => {
            let eusd = data[Object.keys(data)[0]].ETH.USD;
            let total = total_balanceusdt + (total_balance * eusd)
            return res.json({
                "usdt": total_balanceusdt,
                "eth": total_balance,
                "total": total,
                "totalprogress": ((total / 1000000) * 100).toFixed(6)
            });
        });

}

module.exports = { getNonce, signatureAuthentication, send_transaction, get_balance, get_balance_all }
