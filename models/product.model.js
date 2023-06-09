
const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {type: String,
        required: [true, "Title is required."],
        minLength: [3, "Title must be three or more characters."],
        maxLength: [30, "Title must be 30 or less characters."]},

    cost: {type: Number,
        required: [true, "Price is required."],
        minLength: [1, "Price must be higher."],
        maxLength: [7, "Price must be lower."]},

    info: {type: String,
        required: [true, "Information is required."],
        minLength: [10, "More information is required."],
        maxLength: [100, "Maxiumum information length exceeded."]}

}, {timestamps: true})

module.exports = mongoose.model('Product', ProductSchema);

