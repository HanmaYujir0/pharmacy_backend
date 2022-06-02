const mongoose = require('mongoose');

const drugSchema = mongoose.Schema({
    name: String,
    price: Number,
    drugCat: {
        ref:"Category",
        type: mongoose.Schema.Types.ObjectId
    },
    recipe: {
        type: Boolean,
    }
});

const Drug = mongoose.model("Drug", drugSchema);
module.exports = Drug;