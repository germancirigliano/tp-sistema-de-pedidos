import express from 'express';
import cors from 'cors';
import config from './config.js';
import router from './routes/index.js';
import http from 'http';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.use((_, res) => {
	res.status(404).send({ message: 'Resource not found' });
});

app.listen(config.PORT, () => {
	console.log(`Server is running on http://localhost:5000`);
});

export default app;
