import { Router } from 'express';

import CarsController from '../controllers/carControllers';
import CarsModel from '../models/carModels';
import CarsService from '../services/car';

const route = Router();

const carsModel = new CarsModel();
const carsService = new CarsService(carsModel);
const carsController = new CarsController(carsService);

route.post('/cars', (req, res) => carsController.create(req, res));
route.get('/cars', (req, res) => carsController.read(req, res));

export default route;