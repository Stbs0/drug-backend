import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import drugRouter from './routers/drugs.js';
import userRouter from './routers/users.js';
import { requestLogger, unknownEndpoint } from './utils/middleware.js';

const app = express();
app.use(express.json());

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.use('/drug', drugRouter);
app.use('/user', userRouter);

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/*', unknownEndpoint);

export default app;
