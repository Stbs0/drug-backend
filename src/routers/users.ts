import express from 'express';
import asyncHandler from 'express-async-handler';

const userRouter = express.Router();
userRouter.get(
  '/',
  asyncHandler(async (_req, _res) => {}),
);

export default userRouter;
