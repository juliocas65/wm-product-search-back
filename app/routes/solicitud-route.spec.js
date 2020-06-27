const solicitudRoute = require('./solicitud-route');

describe('solicitudRoute', () => {
  it('should route', () => {
    solicitudRoute(() => {});
    solicitudRoute();
  });
});
