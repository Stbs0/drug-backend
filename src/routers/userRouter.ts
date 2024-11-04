import { createUser } from 'controllers/userController.js';
import express from 'express';
import asyncHandler from 'express-async-handler';
import { createUserSchema } from 'utils/schemas.js';

const userRouter = express.Router();

userRouter.post(
  '/create',
  asyncHandler(async (req, res) => {
    const body = createUserSchema.parse(req.body);

    const user = await createUser(body);
    console.log(user);
    res.send(user);
  }),
);

export default userRouter;
