const healthController = require('./health-controller');
const { expect } = require('chai');

describe('healthController', () => {
  it('should return health', (done) => {
    const res = {
      send(data) {
        expect(data).to.be.equal('solicitud up and running on local');
        done();
      }
    };
    healthController(undefined, res);
  });
});
