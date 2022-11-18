import { Router } from 'express';
import productRoute from './product.route';
import userRoute from './user.route';

const router = Router();

router.use('/product', productRoute);
router.use('/user', userRoute);

export default router;
