import { NextFunction, Request, Response } from 'express';
import { UserRegistrationDto } from '../dto/user-registration.dto';
import { User } from '../models';
import handleDBError from '../utils/handleDBError';
import { HttpError } from '../utils/httpError';

export const registration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload: UserRegistrationDto = new UserRegistrationDto(req.body);

  const validation = payload.validate();
  if (!validation.isValid) {
    const error = HttpError.badRequest(validation.message);
    return next(error);
  }
  try {
    const newUser = await User.create({ ...payload });
    res.json(newUser);
  } catch (error: any) {
    next(handleDBError(error));
  }
};

export const login = (req: Request, res: Response) => {
  res.json('login');
};
