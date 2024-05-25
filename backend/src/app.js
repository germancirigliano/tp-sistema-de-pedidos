import express from 'express';
import cors from 'cors';
import config from './config.js';
import usersRouter from './routes/users.js';
import productsRouter from './routes/products.js';
import salariesRouter from './routes/salaries.js';
import historicalCostsRouter from './routes/historical-costs.js';
import historicalPublicRouter from './routes/historical-public.js';

const app = express();
app.use(cors());
app.set('port', config.port);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/salaries', salariesRouter);
app.use('/histcost', historicalCostsRouter);
app.use('/histpublic', historicalPublicRouter);

export default app;
