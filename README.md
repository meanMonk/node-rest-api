
NODE-Rest-API is Developed using the next technologies
* NodeJs
* ExpressJs
* Mongoose
* MongoDB

#Rest API Starter using nodejs/express/mongoose

This is the starter kit for developing the rest api using node express and mongoose with mongodb.
> We are using [GULP](https://gulpjs.com/)  as task runner.
> Unit test we are using [MOCHA](https://mochajs.org/)
> Integration test we are using [SuperTest](https://www.npmjs.com/package/supertest)

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


