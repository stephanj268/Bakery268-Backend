import mongoose, { model, Schema } from 'mongoose';
import { IUser } from '../Service/user/user.model';

const schema = new mongoose.Schema<IUser>({
    username: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },


})

export const UserSchema = mongoose.model('user', schema);