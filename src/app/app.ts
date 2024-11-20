import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { errorHandler, requestLogger, unknownEndpoint } from './middleware.js';
import api from './routes/route.js';

const app = express();
app.use(express.json());

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.use('api/v1', api);

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/*', unknownEndpoint);

app.use(errorHandler);

export default app;
