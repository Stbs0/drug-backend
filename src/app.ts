import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { errorHandler, requestLogger, unknownEndpoint } from './utils/middleware.js';
import drugRouter from 'routers/drugRouter.js';
import userRouter from 'routers/userRouter.js';

const app = express();
app.use(express.json());

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.use('/v1/drug', drugRouter);
app.use('/v1/user', userRouter);

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/*', unknownEndpoint);

app.use(errorHandler);

export default app;
