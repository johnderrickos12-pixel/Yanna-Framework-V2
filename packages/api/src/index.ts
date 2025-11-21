import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'C2 Server is online.' });
});

app.listen(port, () => {
  console.log(`[C2 API] Server is running at http://localhost:${port}`);
});
