import express from 'express';
import historicalCostsRouter from './historical-costs.js';
import historicalPublicRouter from './historical-public.js';
import usersRouter from './users.js';
import productsRouter from './products.js';
import salariesRouter from './salaries.js';

const router = express.Router();

router.use('/histcost', historicalCostsRouter);
router.use('/histpublic', historicalPublicRouter);
router.use('/products', productsRouter);
router.use('/users', usersRouter);
router.use('/salaries', salariesRouter);

export default router;
