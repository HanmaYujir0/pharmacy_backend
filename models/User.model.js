const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    wallet: Number,
    recipe: {
        type: Boolean,
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;