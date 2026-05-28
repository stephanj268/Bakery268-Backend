import express, {Request, Response} from 'express';
import { getUser } from './user.service';

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    getUser(req, res);
})


export {router as UserRouter}