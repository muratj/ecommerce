import { Request, Response } from 'express';

export const create = (req: Request, res: Response) => {
  res.json('create');
};

export const getAll = (req: Request, res: Response) => {
  res.json('getAll');
};

export const getOne = (req: Request, res: Response) => {
  res.json('getById ' + req.params.id);
};
