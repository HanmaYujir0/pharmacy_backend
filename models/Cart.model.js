const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    user: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId,
    },
    product: [{
        ref: "Drug",
        type: mongoose.Schema.Types.ObjectId,
    }],
    summ: {
        type: Number,
        default: 0,
    }
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;