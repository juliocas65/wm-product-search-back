# wm-product-search-back
---------------------
Service to search products from mongo database of Walmarts promotions.

### Running the service
---------------------
 ``` npm run start ```

###Port:
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
* Coverage over 90%: npm run coverage
* Unit tests: npm run unit-test
