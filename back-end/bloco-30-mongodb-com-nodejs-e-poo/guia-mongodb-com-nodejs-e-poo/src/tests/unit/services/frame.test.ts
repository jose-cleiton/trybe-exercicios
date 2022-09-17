import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import FrameModel from '../../../models/Frame';
import FrameService from '../../../services/Frame';
import { frameMocForChangeWithId, frameMock, frameMOckInvalid, frameMockWithId } from '../../mocks/frameMock';



describe("Testando a camada service Frame", () => {

const frameModel = new FrameModel();
const frameService = new FrameService(frameModel);

before(() => {
  sinon.stub(frameModel, 'create').resolves(frameMockWithId);
  sinon.stub(frameModel, 'readOne')
    // na chamada de index 0 `frameModel.readOne` vai responder um fakeFrame
    .onCall(0).resolves(frameMockWithId) 
    // já na próxima chamada ele vai mudar seu retorno, isso pode ser feito várias vezes
    .onCall(1).resolves(null); 
  sinon.stub(frameModel, 'update').resolves(frameMocForChangeWithId);
})
after(() => {
  sinon.restore()
})




describe("01 - Testando o método create", () => {
  it("Deve retornar um frame", async () => {
    const frame = await frameService.create(frameMock);
    expect(frame).to.be.an('object');
  })
  it("Deve lançar um erro", async () => {
    try {
      await frameService.create({} as any);
    } catch (error) {
      expect(error).to.be.an.instanceOf(ZodError);
    }
  })

  it('Success', async () => {
    const frameCreated = await frameService.create(frameMock);

    expect(frameCreated).to.be.deep.equal(frameMockWithId);
  });

  it('Failure', async () => {
                      let error;
    try {
      await frameService.create({});
    } catch (err) {
        error = err
    }

                      expect(error).to.be.instanceOf(ZodError);
  });
  
  
})


describe('02 -ReadOne Frame', () => {
  it('Success', async () => {
    const frameCreated = await frameService.readOne(frameMockWithId._id);

    expect(frameCreated).to.be.deep.equal(frameMockWithId);
  });

  it('Failure', async () => {
    let error;
    try {
      
      await frameService.readOne(frameMockWithId._id);
    } catch (err:any) {
     error = err
    }

       expect(error, 'error should be defined').not.to.be.undefined;
       expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
  });
});

describe('03 - Update Frame', () => {
  it('3-01 - Success', async () => {
    const frameUpdate = await frameService.update('62cf1fc6498565d94eba52cd', frameMocForChangeWithId);

    expect(frameUpdate).to.be.deep.equal(frameMocForChangeWithId);
  });

  it('3-02 - Failure', async () => {
    try {
      await frameService.update('62cf1fc6498565d94eba52cd', frameMOckInvalid);
      expect(true).to.be.false;
    } catch (error:any) {
      expect(error).to.be.an.instanceOf(ZodError);
    }
      
   
  })



})
 

}) // fim describe