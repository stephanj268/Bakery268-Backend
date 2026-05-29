import mongoose, { model, Schema } from 'mongoose';
import { IProduct } from '../Service/product/product.model';

const schema = new mongoose.Schema<IProduct>({
    name: {
        type: String,
        required: true,
    },

    type: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    availability: {
        type: Boolean,
        required: true
    }


})

export const ProductSchema = mongoose.model('product', schema);