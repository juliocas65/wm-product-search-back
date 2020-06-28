const productRoute = require('./product-route');

describe('productRoute', () => {
  it('should route', () => {
    productRoute(() => {});
    productRoute();
  });
});
