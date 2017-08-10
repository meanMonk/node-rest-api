var express = require('express');

var snpRoutes = function(Model){
    
    var snpController = require('../controller/snp.controller.js')(Model);
    var snpRoute = express.Router()

    snpRoute.route('/products')
    .get(snpController.getProduct)
    .post(snpController.createProduct);
    
    
    snpRoute.route('/products/:name')
        .get(snpController.getProduct);
        /*.put(snpController.updateProduct)
        .delete(snpController.deleteProduct);*/

        /*returning product and service routes*/
    return snpRoute;
    
}

module.exports = snpRoutes;