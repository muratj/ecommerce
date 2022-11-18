import { Request, Response, Router } from 'express';

const router = Router();

router.post('/', (req: Request, res: Response) => {
  res.json('create');
});

router.get('/', (req: Request, res: Response) => {
  res.json('getAll');
});

router.get('/:id', (req: Request, res: Response) => {
  res.json('getById ' + req.params.id);
});

export default router;
