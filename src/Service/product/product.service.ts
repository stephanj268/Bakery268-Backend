import { IProduct } from "./product.model";
import { ProductSchema } from "../../Modules/user.schema";
import express, { Request, Response } from 'express'

export async function createProduct(req: Request, res: Response) {
    try {
        const product = new ProductSchema({
            name: req.body.name,
            type: req.body.type,
            price: req.body.price,
            availability: req.body.availability,
            description: req.body.description,
            icon: req.body.icon,
        })

        await product.save();

        res.status(200).json(`${product.name} created!`)

    } catch (err) {
        throw err;
    }
}

export async function getProduct(req: Request, res: Response) {
    try {
        const users = await ProductSchema.find();
        if (!users) {
            return res.status(400).json("Users not found")
        }

        res.json(users)

    } catch (err) {
        throw err;
    }
}

export async function getProductById(id: any, req: Request, res: Response) {
    try {
        const product = await ProductSchema.findById(id);
        if (!product) {
            return res.status(400).json("Users not found")
        }

        res.json(product);

    } catch (err) {
        throw err;
    }
}

export async function updateProduct(id: any, req: Request, res: Response) {
    try {
        const product = await ProductSchema.findByIdAndUpdate(id, {$set: req.body});

        if (!product) {
            return res.status(400).json("Product not found")
        }
        
        res.status(200).json(`Updated ${product.name}`);

    } catch (err) {
        throw err;
    }
}


export async function deleteProduct(id: any, req: Request, res: Response) {
    try {
        const product = await ProductSchema.findByIdAndDelete(id, {$set: req.body});

        if (!product) {
            return res.status(400).json("Product not found")
        }
        
        res.status(200).json(`Deleted ${product.name}`);

    } catch (err) {
        throw err;
    }
}