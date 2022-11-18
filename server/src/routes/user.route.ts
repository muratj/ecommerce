import { Router } from 'express';
import * as userController from '../controllers/user.controller';

const router = Router();

router.post('/registration', userController.registration);
router.post('/login', userController.login);

export default router;
