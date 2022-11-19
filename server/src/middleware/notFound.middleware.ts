import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../exceptions/httpError';

export default (req: Request, res: Response, next: NextFunction) => {
  const fullPath = req.originalUrl;
  const error = HttpError.notFound(`${fullPath} not found`);
  next(error);
};
