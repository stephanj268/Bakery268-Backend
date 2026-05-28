import { IUser } from "./user.model";
import { UserSchema } from "../../Modules/user.schema";
import express, { Request, Response } from 'express'

export function createUser(req: Request, res: Response) {
    try {
        const user = new UserSchema<IUser>({
            username: req.body.username,
            password: req.body.password,
        })

        if (!user.password) {
            return res.status(500).json("Please enter a password!");
        };

        if (!user.username) {
            return res.status(500).json("username field empty!");
        }

        user.save();
        res.status(200).json(user)

    } catch (error) {
        throw error;
    }

}

export function getUser(req: Request, res: Response) {
    try {
        const users = UserSchema.find();
        if (!users) {
            return res.status(400).json("Users not found")
        }
        res.json(users)
        
    } catch(err) {
        throw err;
    }
}