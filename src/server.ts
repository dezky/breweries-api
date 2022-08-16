import express, { Application, Response } from "express";

const app: Application = express();

const port = process.env.PROT || 4000;

app.get("/", (_, res: Response) => {
  res.send("response");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
