import { Request, Response } from 'express';

export const registration = (req: Request, res: Response) => {
  res.json(req.body);
};

export const login = (req: Request, res: Response) => {
  res.json('login');
};
