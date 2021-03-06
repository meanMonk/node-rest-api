const snpController = function(snpModel){

    const getProducts = function(req, res){
        const query = {};
        if(req.query.name){
            query.name = { "$regex" : req.query.name}
        }
        snpModel.find(query, function(err, products){
           if(err){
               res.status(401).send(err);
           }else {
               var returnProducts = [];
                products.forEach((product, index) => {
                   var newProduct = product.toJSON();
                   newProduct.links = {};
                   newProduct.links.self = 'http://' + req.headers.host + '/api/products/' + newProduct._id;
                   returnProducts.push(newProduct);
               });
               res.json(returnProducts);
           }
        });
    };

    const getProduct = function (req, res) {
        /*adding the filter by links in the response*/

        var productNode = req.product.toJSON();
        productNode.links = {};
        productNode.links.filter = 'http://' + req.headers.host + '/api/products/?name=' + productNode.name;
        res.json(productNode);
    };

    const create = function(req, res){
        const productNode = new snpModel(req.body);
        if(!req.body.name){
            res.status(400);
            res.send('Name is required');
        }else {
            productNode.save();
            res.status(201);
            res.send(productNode);
        }
    };

    const update = function (req, res) {
        req.product.name = req.body.name;
        req.product.type = req.body.type;
        req.product.hsnCode = req.body.units;
        req.product.value = req.body.value;
        req.product.quantity = req.body.quantity;
        req.product.rates = req.body.rates;
        req.product.taxRates = req.body.taxRates;
        req.product.save(function (err) {
            if(err) {
                res.status(500).send(err);
            } else {
                res.json(req.product);
            }
        });
    };

    const middleware = function (req, res, next) {
        snpModel.findById(req.params.productId, function (err, product) {
            if(err)
            {
                res.status(500).send(err);

            } else if(product){

                req.product = product;
                next();

            } else {
                res.status(404).send({ message: "product no found in record"});
            }
        });
    };
    
    const creatPatch = function (req, res) {
        if(req.body._id){
            delete req.body._id;
        }
        for( let p in req.body){
            req.product[p] = req.body[p];
        }
        req.product.save(function (err) {
            if(err) {
                res.status(500).send(err);
            } else {
                res.json(req.product);
            }
        });
    };

    const deleteProduct = function (req, res) {
        const query = {};
        if(req.params.productId){
            query._id = req.params.productId;
        }
        snpModel.remove(query, function (err, product) {
            if(err){
                res.status(500).send(err)
            }
            res.send({ message : "product deleted successfully", product : product});
        });
    };
    return {
        getProducts: getProducts,
        createProduct: create,
        updateProduct : update,
        middleware : middleware,
        getProduct : getProduct,
        patch : creatPatch,
        deleteProduct : deleteProduct
    }
};

module.exports = snpController;