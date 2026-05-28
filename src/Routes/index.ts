import express from "express";
import { UserRouter } from "../Service/user/user.controller";

const router = express.Router();

router.use('/all-user', UserRouter);

export {router}