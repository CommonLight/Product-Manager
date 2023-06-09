
const Product = require('../models/product.model')

module.exports.createProduct = (request, response) => {
    Product.create(request.body) 
        .then(products => response.json(products))
        .catch(err => response.json(err))}


module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products => {response.json(products)})
        .catch(err => {response.json(err)})}


module.exports.getOneProduct = (request, response) => {
    Product.findOne({_id: request.params.id})
        .then(products => {response.json(products)})
        .catch(err => {response.json(err)})}

        
// module.exports.modifyProduct = (request, response) => {
//     Product.modifyProduct({})
//         .then(products => {response.json(products)})
//         .catch((err) => {response.json(err)})}

// module.exports.removeProduct = (request, response) => {

// }