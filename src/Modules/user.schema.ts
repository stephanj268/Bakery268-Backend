import mongoose, { model, Schema } from 'mongoose';
import { IUser } from '../Service/user/user.model';

const schema = new mongoose.Schema<IUser>({


})

export const UserSchema = mongoose.model('user', schema);