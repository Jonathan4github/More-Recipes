import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../app';

const { should, expect } = chai;
chai.use(chaiHttp);

describe('Application for testing dummy recipe api', () => {
  it('should return Home page', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.Message).to.equal('Welcome to more recipes');
        done();
      });
  });
  // describe('Retrieve all recipes', () => {
  //   it('should return Home page', (done) => {
  //     chai.request(app)
  //       .get('/api/recipes/')
  //       .end((err, res) => {
  //         expect(res).to.have.status(200);
  //         expect(res.body).to.equal('Welcome to more recipes');
  //         done();
  //       });
  //   });



});