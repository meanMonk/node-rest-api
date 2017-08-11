
NODE-Rest-API is Developed using the next technologies
* NodeJs
* ExpressJs
* Mongoose
* MongoDB

This is the starter kit for developing the rest api using node/express/mongoose with mongodb.

> Task runner [GULP](https://gulpjs.com/)

> Unit test using [MOCHA](https://mochajs.org/)

> Integration test using [SuperTest](https://www.npmjs.com/package/supertest)

## File Structure
We have tried to

```
node-rest-api/
 ├──api/                                           * our api folder
 |   ├──controller/                                * Controller contain all the helper functions
 |          ├──snp.controller.js                   * service and products page controller
 |          ├──snp.controller.spec.js              * test cases related to service and product controller will be here
 |          └──coming soon                         * more controller file will be coming soon
 |   ├──models/                                    * Models will hold all the schema for the db
 |          ├──snp.model.js                        * Schema model for service and products model
 |          └──coming soon                         * more model schema will be coming soon
 |   ├──routes/                                    * Routes folder will hold all the routing related stuff
 |          ├──snp.route.js                        * service and products page routes
 |          └──coming soon                         * more routes will be coming soon
 ├──server.js                             * application start file or server file
 ├──package.json                          * what npm uses to manage it's dependencies
 └──gulpfile.js                           * gulp configuration file

```


###Quick Start

**Make sure you have Node version >= 6.0 and NPM >= 3 also mongodb  and gulp is install on your machine**

```bash
    # Clone our repo
    git clone --depth 1 https://github.com/meanMonk/node-rest-api.git

    #Navigate to directory
    cd node-rest-api

    # install the repo with npm
    npm install

    # Start mongodb server with command below
     mongod --dbpath <path to your db folder>
        ex. mongod --dbpath ./data/db

    # start the server
    npm start

    ##Api available

    # server will be available on link
    `localhost:8000`

    #Get all the products information
    `localhost:8000/api/products`

    #Create new product information at time with post request to url
    `localhost:8000/api/products`

    #Get single product information
    `localhost:8000/api/products/productId`

    #Update single product information by making the put request to below link
    `localhost:8000/api/products/productId`

    #Submits a partial modification to a resource. If you only need to update one field for the resource you may want to use the PATCH method with link below
    `localhost:8000/api/products/productId`

    #To remove single product information by making the delete request to below link
    `localhost:8000/api/products/productId`

```

Donate
------

If you find this project helpful for you and if you really appreciate my work so you can buy me a cup of coffee.

[PAYPAL](https://www.paypal.me/SahilKashetwar)

