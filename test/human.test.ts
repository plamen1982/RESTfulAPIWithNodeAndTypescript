import * as mocha from 'mocha'
import * as chai from 'chai'
import  chaiHttp = require('chai-http')


import  app  from '../src/App'

chai.use(chaiHttp);

const expect = chai.expect;

describe('Get methods to api/v1/humans', ()=>{
    it('Should return a array of jsons', ()=>{
        return chai.request(app).get('/api/v1/humans')
        .then(resData => {
                expect(resData).to.be.json
                expect(resData.status).to.be.equal(200)
                expect(resData.body).to.be.an('array')
                expect(resData.body).to.have.length(5)
            })
    })
})