import { Request, Response, Router } from 'express';

const router = Router();

router.post('/registration', (req: Request, res: Response) => {
  res.json(req.body);
});

router.post('/login', (req: Request, res: Response) => {
  res.json('login');
});

export default router;
