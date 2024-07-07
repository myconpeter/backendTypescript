import express, { Express, Request, Response, Router } from 'express';

const router: Router = Router();

router.get('/hello', async (req: Request, res: Response) => {
	res.send('hello');
});

export default router;
