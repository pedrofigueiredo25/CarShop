import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import DBModel from './dbModel';

const carModel = new Schema<ICar>({
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
}, { versionKey: false });

class Cars extends DBModel<ICar> {
  constructor(model = mongooseCreateModel('Cars', carModel)) {
    super(model);
  }
}

export default Cars;
