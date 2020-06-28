# wm-product-search-back
---------------------
Service to search products from mongo database of Walmarts promotions.

### Services Availables:
---------------------
Checkout the Swagger Documentation:
[Swagger Doc](http://localhost:3001/products/api-docs/)

Import the Postman Collection:
[Postman Collection](https://www.getpostman.com/collections/7e76c413f152e5d4ec33)

### Running the service
---------------------
 ``` npm run start ```

### Port:
---------------------
3001

### Environment variables needed:
---------------------
#### Services headers:
export COUNTRY
export COMMERCE
export CHANNEL

#### Mongo Database:
export MONGO_USER
export MONGO_PASS
export MONGO_HOST
export MONGO_PORT

### Testing
---------------------
* Unit tests: ``` npm run unit-test ```
* Coverage over 90%: ``` npm run coverage ```
* Integration Test with Newman: ``` npm run check-newman ```
* Stub Services with Stubbys: ``` npm run stubby-all ```
* Eslint check: ``` npm run eslint ```
