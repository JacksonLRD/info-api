import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import createServer from '../../app/config/server/server';

const app = createServer();

chai.should();
chai.use(chaiHttp);

describe('Vehicle Routes', () => {
  describe('/GET vehicles', () => {
    it('Should get all vehicles', () => {
      chai
        .request(app)
        .get('/vehicles')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
        });
    });

    it('Should a throw an exception when using wrong url', () => {
      chai
        .request(app)
        .get('/vehicle')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(404);
          res.should.have.status(404);
          res.badRequest;
          res.notFound;
        });
    });
  });

  describe('/GET/:id vehicles', () => {
    const vehicleMock = {
      id: '86cf1d6f-c989-4e8d-a',
      placa: '',
      chassi: '59871HYIA26',
      renavam: '',
      modelo: 'Uno Mille',
      marca: 'FIAT',
      ano: 2000,
    };

    it('Should GET a vehicle by the given id', () => {
      chai
        .request(app)
        .get('/vehicles/' + vehicleMock.id)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('placa');
          res.body.should.have.property('chassi');
          res.body.should.have.property('renavam');
          res.body.should.have.property('modelo');
          res.body.should.have.property('marca');
          res.body.should.have.property('ano');
          res.body.should.have.property('id').eql(vehicleMock.id);
        });
    });

    it('Should NOT GET a vehicle by ID', () => {
      chai
        .request(app)
        .get('/vehicles/' + vehicleMock.id)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('Vehicle not Found');
          res.body.should.have.property('status').eql('error');
        });
    });
  });

  describe('/POST vehicles', () => {
    const vehicleMock = {
      placa: '',
      chassi: '59871HYIA26',
      renavam: '',
      modelo: 'Uno Mille',
      marca: 'FIAT',
      ano: 2000,
    };

    it('Should POST a new vehicle', () => {
      chai
        .request(app)
        .post('/vehicles')
        .send(vehicleMock)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('id');
          res.body.should.have.property('placa').eql('');
          res.body.should.have.property('chassi').eql('59871HYIA26');
          res.body.should.have.property('renavam').eql('');
          res.body.should.have.property('modelo').eql('Uno Mille');
          res.body.should.have.property('marca').eql('FIAT');
          res.body.should.have.property('ano').eql(2000);
        });
    });

    it('Should NOT POST new vehicle without the placa property', () => {
      const { placa, ...rest } = vehicleMock;

      chai
        .request(app)
        .post('/vehicles')
        .send(rest)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('"\\"placa\\" is required"');
          res.body.should.have.property('status').eql('error');
        });
    });

    it('Should NOT POST new vehicle without the chassi property', () => {
      const { chassi, ...rest } = vehicleMock;

      chai
        .request(app)
        .post('/vehicles')
        .send(rest)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('"\\"chassi\\" is required"');
          res.body.should.have.property('status').eql('error');
        });
    });

    it('Should NOT POST new vehicle without the renavam property', () => {
      const { renavam, ...rest } = vehicleMock;

      chai
        .request(app)
        .post('/vehicles')
        .send(rest)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('"\\"renavam\\" is required"');
          res.body.should.have.property('status').eql('error');
        });
    });

    it('Should NOT POST new vehicle without the modelo property', () => {
      const { modelo, ...rest } = vehicleMock;

      chai
        .request(app)
        .post('/vehicles')
        .send(rest)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('"\\"modelo\\" is required"');
          res.body.should.have.property('status').eql('error');
        });
    });

    it('Should NOT POST new vehicle without the marca property', () => {
      const { marca, ...rest } = vehicleMock;

      chai
        .request(app)
        .post('/vehicles')
        .send(vehicleMock)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('"\\"marca\\" is required"');
          res.body.should.have.property('status').eql('error');
        });
    });

    it('Should NOT POST new vehicle without the ano property', () => {
      const { ano, ...rest } = vehicleMock;

      chai
        .request(app)
        .post('/vehicles')
        .send(rest)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('"\\"ano\\" is required"');
          res.body.should.have.property('status').eql('error');
        });
    });
  });

  describe('/PATCH vehicles', () => {
    const vehicleId = {
      id: '48641sae-AEfad4',
    };

    const updates = {
      placa: 'KJR9685',
      renavam: '00589631',
    };

    it('Should PATCH an existing vehicle', () => {
      chai
        .request(app)
        .patch('/vehicles/update/' + vehicleId)
        .send(updates)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('id').eql('48641sae-AEfad4');
          res.body.should.have.property('placa').eql('KJR9685');
          res.body.should.have.property('renavam').eql('');
        });
    });

    it('Should NOT PATCH an existing vehicle without the placa property', () => {
      const { placa, ...rest } = updates;

      chai
        .request(app)
        .patch('/vehicles/update/' + vehicleId)
        .send(rest)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('"\\"placa\\" is required"');
          res.body.should.have.property('status').eql('error');
        });
    });

    it('Should NOT PATCH an existing vehicle without the renavam property', () => {
      const { renavam, ...rest } = updates;

      chai
        .request(app)
        .patch('/vehicles/update/' + vehicleId)
        .send(rest)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('"\\"renavam\\" is required"');
          res.body.should.have.property('status').eql('error');
        });
    });
  });

  describe('/DELETE vehicles', () => {
    it('Should DELETE an existing vehicle', () => {
      const vehicleId = {
        id: '48641sae-AEfad4',
      };

      chai
        .request(app)
        .delete('/vehicles/remove/' + vehicleId)
        .end((err, response) => {
          response.should.have.status(200);
        });
    });
  });
});
