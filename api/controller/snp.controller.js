var snpController = function(snpModel){
    var getProduct = function(req, res){
        var query = {};
        if(req.query.name){
            query.name = req.query.name;
        }
        snpModel.find(query, function(err, products){
           if(err){
               res.status(401).send(err);
           }else {
               res.json(products);
           }
        });
    }
    
    var create = function(req, res){
        var productNode = new snpModel(req.body);
        productNode.save();
        res.status(201).send(productNode);
    }
    
    
    return {
        getProduct: getProduct,
        createProduct: create
    }
}

module.exports = snpController;