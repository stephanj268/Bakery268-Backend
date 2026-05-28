import express, { type Request, type Response } from 'express';
import { database } from '../config/database';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(database).then(() => {
    console.log(`[Connection to DATABASE] - ${database} CONNECTED 🥖`);

}).catch((err) => {
    console.log(err);
});

app.get('/', (req: Request, res: Response) => {
    res.send('Server Running');

});

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});