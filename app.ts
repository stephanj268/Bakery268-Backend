import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());


app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})

app.get('/', (req: Request, res: Response) => {
    res.send('cdcsd');

})