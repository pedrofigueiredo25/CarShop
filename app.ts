import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler';
import carsRouter from './routes/carRoutes';

const app = express();
app.use(carsRouter);
app.use(errorHandler);

export default app;
