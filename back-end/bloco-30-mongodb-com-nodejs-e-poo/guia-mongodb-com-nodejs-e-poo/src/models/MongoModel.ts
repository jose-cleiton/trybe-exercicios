import { isValidObjectId, Model } from 'mongoose';
import IModel from '../interfaces/IModel';

export default abstract class MongoModel<T> implements IModel<T> {
  protected _model:Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  async create(obj: T): Promise<T> {
    const record = await this._model.create({ ...obj });
    return record;
  }
  async readOne(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
    const record = await this._model.findOne({ _id });
    return record;
  }
}