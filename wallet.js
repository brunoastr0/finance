const moongose = require('mongoose');

const walletSchema = new moongose.Schema({

    name: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true
    },
    isEmpty: boolean

},
    { timestamp: true });

    const wallet = moongose.model('wallet', walletSchema);
module.exports = wallet ;
