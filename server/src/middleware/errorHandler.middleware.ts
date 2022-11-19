import { NextFunction, Request, Response } from 'express';

export default (err: any, req: Request, res: Response, next: NextFunction) => {
  const reqPath = req.originalUrl;
  return res
    .status(err.status || 500)
    .json({ message: err.message, path: reqPath });
};
