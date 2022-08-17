import express, { Application, Response } from 'express';
import { etlPipeline } from './etlPipeline';

const app: Application = express();

const port = process.env.PROT || 4000;

app.get('/breweries', async (_, res: Response) => {
  try {
    const data = await etlPipeline();
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
