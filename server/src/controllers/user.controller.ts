import { NextFunction, Request, Response } from 'express';
import { UserRegistrationDto } from '../dto/user-registration.dto';
import { User } from '../models';

export const registration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload: UserRegistrationDto = new UserRegistrationDto(req.body);
  try {
    const newUser = await User.create({ ...payload });
    res.json(newUser);
  } catch (error: any) {
    error.status = 400;
    next(error);
  }
};

export const login = (req: Request, res: Response) => {
  res.json('login');
};
