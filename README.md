wm-product-search-back
---------------------

Running the service
---------------------
NODE_ENV=<environment-name> npm start

NODE_ENV=<environment-name> pm2 start bin/www
 

Testing
---------------------
* Coverage must be at least 90%: npm run coverage
* Unit tests: npm run unit-test
* Iso test: npm run iso-test
* The project must have a script to run all tests at once, like:  npm run test
