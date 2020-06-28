# wm-product-search-back
---------------------
Service to search products from mongo database of Walmarts promotions.

### Run local on you IDE:
---------------------
* Ensure to set up the environment variables (See Environment variables needed)
* Run the service locally: ``` npm run start ```
* Then your service will be up. Try it! (See Services Availables in this doc page).

### Build and run as Docker Container:
---------------------
* Ensure you get up the Mongo DB instance.
* Ensure to have the correct environment variables values on ``` dockerfiles/Dockerfile ``` to connect with MongoDB.
* Run the command ``` sh build-local.sh ``` on the root of this repository. This will build the docker image tagged with :local and then will run the container.
* Then your service will be up. Try it! (See Services Availables in this doc page).

### Default Port:
---------------------
3001

### Environment variables needed:
---------------------
#### Services headers:
* export COUNTRY
* export COMMERCE
* export CHANNEL

#### Mongo Database:
* export MONGO_USER
* export MONGO_PASS
* export MONGO_HOST
* export MONGO_PORT

### Services Availables:
---------------------
Checkout the OpenApi Swagger Documentation, once you run the application:
[Swagger Doc](http://localhost:3001/products/api-docs/)

You can import the Postman Collection to prove the service:
[Postman Collection](https://www.getpostman.com/collections/7e76c413f152e5d4ec33)

### Testing:
---------------------
* Unit tests: ``` npm run unit-test ```
* Coverage: ``` npm run coverage ```
* Integration Test with Newman: ``` npm run check-newman ```
* Stub Services with Stubbys: ``` npm run stubby-all ```
* Eslint check: ``` npm run eslint ```
