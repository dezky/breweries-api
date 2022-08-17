import express, { Application, Response } from 'express';
import passport from 'passport';
import { Strategy } from 'passport-http-bearer';
import { etlPipeline } from './etlPipeline';

const app: Application = express();

const port = process.env.PORT || 4000;
const validToken = process.env.VALID_TOKEN || 'my-valid-token';

passport.use(
  new Strategy(function (token, done) {
    if (token === validToken) {
      return done(null, true);
    }
    return done(null, false);
  })
);

app.get(
  '/breweries',
  passport.authenticate('bearer', { session: false }),
  async (_, res: Response) => {
    try {
      const data = await etlPipeline();
      res.send(data);
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
