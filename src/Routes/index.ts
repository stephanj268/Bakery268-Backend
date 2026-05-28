import express, { Router } from "express";
import { UserRouter } from "../Service/user/user.controller";

const router = Router()

router.use('user', UserRouter)

export {router}