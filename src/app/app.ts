import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import api from './routes/route.js';
import { errorHandler, requestLogger, unknownEndpoint } from './utils/middleware.js';
process.on('uncaughtException', (err) => console.error('Uncaught Exception:', err));
process.on('unhandledRejection', (reason, _promise) => console.error('Unhandled Rejection:', reason));
const app = express();
app.use(express.json());

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(requestLogger);
app.get('/health', (_req, res) => {
  res.status(200).send('ok');
});
app.use('/api/v1', api);

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use(unknownEndpoint);

app.use(errorHandler);

export default app;
