import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { UserRegistrationDto } from '../dto/user-registration.dto';
import { User } from '../models';
import { Model } from 'sequelize';

export const registration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload: UserRegistrationDto = new UserRegistrationDto(req.body);
  try {
    const user = await User.build(Object(payload));
    await user.validate();
    await encryptPassword(user);

    const newUser = await User.create(user.dataValues);
    delete newUser.dataValues.password;

    res.json(newUser);
  } catch (error: any) {
    error.status = 400;
    next(error);
  }
};

export const login = (req: Request, res: Response) => {
  res.json('login');
};

// Helpers

const encryptPassword = async (user: Model) => {
  const password: string = user.get('password') as string;
  validatePassword(password);
  let encryptedPassword = await bcrypt.hash(password, 12);
  user.set('password', encryptedPassword);
};

const validatePassword = (password: string) => {
  const rule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const valid = rule.test(password);
  if (!valid) {
    throw new Error(
      'Your password should be minimum eight characters, at least one uppercase letter, one lowercase letter and one number'
    );
  }
};
