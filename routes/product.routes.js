
const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    app.get('/api/products', ProductController.getAllProducts)
    app.get('/api/products/:id', ProductController.getOneProduct)
    app.post('/api/products', ProductController.createProduct)
    app.patch('/api/products/:id', ProductController.modifyProduct)
}
