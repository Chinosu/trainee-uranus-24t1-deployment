import express, { Request, Response } from 'express';
import { requireToken } from '../middleware/token.middleware';
import { ObjectId } from 'mongodb';
import { collections } from '../services/database.service';
import User from '../models/user';
import { publicUserInfo } from '../services/public-user-info';

export const usersRouter = express.Router();
usersRouter.use(express.json());

usersRouter.get('/profile/:id', requireToken, async (req: Request, res: Response) => {
  const id: string = req.params.id;

  try {
    const query = { _id: new ObjectId(id) };
    const result = (await collections.users?.findOne(query) as unknown) as User;
    if (result) {
      res.status(200).send(publicUserInfo(result));
    } else {
      res.status(400).send('Could not find user');
    }
  } catch (error: any) {
    console.error(error);
    res.status(400).send(error.message);
  }
});