import express from "express";
import { UserRouter } from "../Service/product/product.controller";

const router = express.Router();

router.use('/product', UserRouter);

export {router}