import express from 'express';
import asyncHandler from 'express-async-handler';

const drugRouter = express.Router();

drugRouter.post(
  '/',
  asyncHandler(async (_req, _res) => {
    // const name = await getAproximmateName(req.body.name);
    // console.log("name",name);
    // const removedSalts = removeSalts(name);
    // console.log("removedSalts",removedSalts);
    // const drug = await getDrugInfo(removedSalts);
    // res.json(drug);
  }),
);

export default drugRouter;
