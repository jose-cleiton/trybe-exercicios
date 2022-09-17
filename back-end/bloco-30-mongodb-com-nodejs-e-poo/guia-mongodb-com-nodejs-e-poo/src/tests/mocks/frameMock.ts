// ./src/tests/mocks/frameMock.ts

import IFrame from '../../interfaces/Frame';

type withId = { _id:string }

const frameMock:IFrame = {
  material: 'Ouro',
  color: 'Daquele naipe'
};

const frameMockWithId:IFrame & withId = {
  _id: '62cf1fc6498565d94eba52cd',
  material: 'Ouro',
  color: 'Daquele naipe'
};

const frameMockForChancge:IFrame = {
  material: 'Adamantium',
  color: 'Brilho de prata'
}


const frameMocForChangeWithId:IFrame & withId = {
  _id: '62cf1fc6498565d94eba52cd',
  material: 'Adamantium',
  color: 'Brilho de prata'

}




export { 
  frameMock, 
  frameMockWithId,
  frameMockForChancge,
  frameMocForChangeWithId

};