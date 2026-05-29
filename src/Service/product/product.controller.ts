import express, { Request, Response } from 'express';
import { getProduct, createProduct, getProductById, updateProduct, deleteProduct } from './product.service';

const router = express.Router()

// split the :
function slice(val: any) {
    let newSlice = null;

    if (val.startsWith(":")) {
        newSlice = val.slice(1);
    } else {
        return val;
    }

    return newSlice;
}

router.post('/', (req: Request, res: Response) => {
    createProduct(req, res)
});

router.get('/', (req: Request, res: Response) => {
    getProduct(req, res);
});

router.get('/:id', (req: Request, res: Response) => {
    let id = req.params.id
    id = slice(id);

    getProductById(id, req, res);
});

router.put('/:id', (req: Request, res: Response) => {
    let id = req.params.id
    id = slice(id);

    updateProduct(id, req, res);
});

router.delete('/:id', (req: Request, res: Response) => {
    let id = req.params.id
    id = slice(id);

    deleteProduct(id, req, res);
});

export { router as UserRouter }