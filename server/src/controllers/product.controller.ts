import { NextFunction, Request, Response } from 'express';
import { HttpError } from '../exceptions/httpError';
import { Product } from '../models';

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, price } = req.body;
    const product = await Product.create({ name, price });
    res.json(product);
  } catch (err: any) {
    const error = HttpError.badRequest(err.message);
    next(error);
  }
};

export const getAll = (req: Request, res: Response) => {
  res.json('getAll');
};

export const getOne = (req: Request, res: Response) => {
  res.json('getById ' + req.params.id);
};
