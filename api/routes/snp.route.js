const express = require('express');
const productModel = require('../models/snp.model.js');

const snpRoutes = function(){
    
    const snpController = require('../controller/snp.controller.js')(productModel);
    const snpRoute = express.Router();

    snpRoute.route('/products')
    .get(snpController.getProducts)
    .post(snpController.createProduct);

    snpRoute.use('/products/:productId', snpController.middleware);

    snpRoute.route('/products/:productId')
        .get(snpController.getProduct)
        .put(snpController.updateProduct)
        .patch(snpController.patch)
        .delete(snpController.deleteProduct);
        /*returning product and service routes*/
    return snpRoute;
    
};

module.exports = snpRoutes;