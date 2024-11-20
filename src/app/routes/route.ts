import { Router } from 'express';
import userRoute from './user/user.route.js';
import drugRoute from './drug/drugRouter.js';

const api = Router();

api.use('/user', userRoute);

api.use('/drug', drugRoute);

export default api;
